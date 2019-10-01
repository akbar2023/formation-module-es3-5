"use strict";

// 4 Type des données :
/**
 *  Number
 */
123;
/**
 * String
*/
"Hello !";
/**
 * Boolean
 */
true;
/**
 * Object
 */
{}
// Est un "raccourci"/"sucre syntaxique" pour
new Object({});
// ---> Array
["a","b"]; // les propriétés sont des index
// Est un "raccourci"/"sucre syntaxique" pour
new Array("a","b");
// ---> Functions
var fcn1 = (function(){
    var calcul = 5 + 6;
}); // "objets" exécutables
// exécution :
fcn1();
// Est un "raccourci"/"sucre syntaxique" pour
var fcn2 = new Function("var calcul = 5 + 6;");
// exécution
fcn2();
fcn1.toString(); // "(function(){ var calcul = 5 + 6; });"

/**
 * Créer des objets
 */

 // Déclaration littérale
var pointeurVersObjet = {};

pointeurVersObjet["l'emplacement favori de l'été"] = "Ceci est un message !";
pointeurVersObjet[42] = 24;
pointeurVersObjet.propriete1 = "Ceci est une propriété";

// Déclaration à l'aide de "fonction constructeur"
function ConstructeurObjetPerso() {
    this.prop1 = 34;
    this[12] = "test";
    this["Hello world !"] = "Pas glop";
    this.ailleurs = function(){
        window.alert("pas là");
    }
}

var pointeurVersUnAutreObjet = new ConstructeurObjetPerso();

// Création d'objet qui ont un prototype :
function MamanReptile(m){
    this.taille = "minus";
    this.croc = "accérés";
    this.aUneQueue = true;
    this.pondDesOeufs = true;
}

MamanReptile.prototype.taille = "géant";
MamanReptile.prototype.cri = function(){
        window.alert("Pfssssss");
}

var lezard1 = new MamanReptile();

// Autre possibilité pour créer des objets à partir de prototype :
var ancetre = {
    nom: "mathusalem",
    prenom: "michel",
    age: "123 Ans"
};

// Défini dans la documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperties
var objetDeDefinitionDeProprietes = {
    age: {
        value: "21 Ans",
        enumerable: true,
        writable: true,
        configurable: true
    },
    prenom: {
        value: "Marie",
        enumerable: true,
        writable: true,
        configurable: true
    }
};
var objetAvecAncetre = Object.create(ancetre,objetDeDefinitionDeProprietes);

// Design pattern : Sub "class" / émulation de l'héritage
var ConstructeurDeBateau = function(){
    this.flotte = true;
    this.aDesHelices = true;
}

ConstructeurDeBateau.prototype["vogue"] = function(){
    window.alert("Plic ploc !");
}

var ConstructeurDeVoitureDeJamesBond = function(){
    this.modele = "de luxe";
    this.cuir = "Alacantara";
    this.proprietaire = "James Bond";
    this.peutRouler = true;
    ConstructeurDeBateau.call(this);
}

ConstructeurDeVoitureDeJamesBond.prototype["roule"] = function(){
    window.alert("Vrooom !");
}

for(var propriete in ConstructeurDeBateau.prototype) {
    ConstructeurDeVoitureDeJamesBond.prototype[propriete] = ConstructeurDeBateau.prototype[propriete];
}

var agent007 = new ConstructeurDeVoitureDeJamesBond();

/**
 * Coercition
 */
// Ne s'applique pas aux objets de type function :
var fcnA = function(){};
var fcnB = function(){};
fcnA === fcnB; // false
// Ne s'applique pas aux objets de type array :
var tab1 = ["a", "b"];
var tab2 = ["a", "b"];
tab1 === tab2; // false
// Ne s'applique pas aux objets de type object :
var obj1 = {};
var obj2 = {};
obj1 === obj2; // false

// Coercition sur les chaines de caractères :
// Ce que le développeur écrit :
"Ceci est un test".length;
// Ce que le moteur fait :
(new String("Ceci est un test")).length

"Ceci est un test" === new String("Ceci est un test"); // false

// Coercition sur les nombres :
// Ce que le développeur écrit :
(152).toString();
// Ce que le moteur fait :
(new Number(152)).toString();

152 === new Number(152); // false

// Coercition sur les booléens :
// Ce que le développeur écrit :
(false).toString();
// Ce que le moteur fait :
(new Boolean(false)).toString();

false === new Boolean(false); // false

/**
 * Fonction qui retourne une référnce à une fonction
 */

var maFonction = function(){

    var tab = ["a","b"];

    return function(){
        window.alert(tab[1]);
    }
}

var parIciMaPetite = maFonction();

parIciMaPetite(); // affiche "b"
// Mécanisme dit de closure

/**
 * Recursion
 */
// Boucle
/*var compteur = 1;
while(compteur < 5) {
    window.alert("Hello");
    compteur = compteur + 1;
}*/
// Version récursive
var afficheHello = function(compteur){
    window.alert("Hello");
    if (compteur < 5) {
        compteur = compteur + 1;
        return afficheHello(compteur);
    } else {
        return compteur;
    }
}
var retour = afficheHello(1);
retour; // 5

