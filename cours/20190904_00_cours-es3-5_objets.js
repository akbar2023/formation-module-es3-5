"use strict";

// Ce fichier est chargé dans un fichier HTML
// 5 types de données :
// - Number
// - String
// - Boolean
// - Function
// - Object
// => Sous-type : Array

/**
 * Retour sur les fonctions
 */
var maFonction = function(){
  // La propriété arguments des fonctions est un objet de type Array
  // qui contient la liste des paramètres de la fonction.
  arguments;
  arguments[0]; // "a"
  arguments[1]; // "b"
  arguments[72]; // undefined

  return arguments[2];
}

maFonction("a","b","c"); // donne "c"

// Exécution de fonctions à la chaîne

var f1 = function(){};
var f2 = function(){};
var f3 = function(){};
var f4 = function(){};
var f5 = function(){};
var f6 = function(){};
var f7 = function(){};
var f8 = function(){};
var f9 = function(){};
var f10 = function(){};

// On peut assigner une référence à chaque fonction à un indice d'un Array
var lesFonctions = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

// Et créer une fonction qui va "boucler" sur l'Array pour exécuter chaque fonction
var executeurDeFonctions = function(){
    for(var compteur = 0; lesFonctions[compteur]; compteur++) {
        lesFonctions[compteur]();
    }
}

executeurDeFonctions(); // exécute chacune des 10 fonctions.
executeurDeFonctions(); // exécute à nouveau chacune des 10 fonctions.

/**
 * Les Objets :
 */

// Un objet littéral vide non assigné :
({}); // déclaration littérale en Notation Objet JavaScript.

// Un objet littéral non vide non assigné :
({
    "margin-left": 42, // propriété ("variable" dans un objet)
    marginTop: -12
});

// Un objet littéral non vide assigné à une variable.
var laVoitureDeSami = {
    bruit: "Vroooom !",
    proprietaire: "Sami",
    8: "Salut"
};

// Accéder à une propriété d'un objet.
laVoitureDeSami.bruit; // pointe sur la propriété bruit de l'objet
// Ou alors :
laVoitureDeSami["bruit"]; // pointe sur la propriété bruit de l'objet.
laVoitureDeSami[8]; // pointe sur la propriété 8 de l'objet.

// Assigner la référence à l'objet dans la variable laVoitureDeSami
// à la variable laVoitureDeYannis
var laVoitureDeYannis = laVoitureDeSami;
// ATTENTION : cette assignation NE COPIE PAS, NE DUPLIQUE PAS l'objet

// Si on change la valeur de la propriété propriétaire de l'objet
// en utilisant la variable laVoitureDeYannis :
laVoitureDeYannis["proprietaire"] = "Yannis";
// On constate que la propriété proprietaire est également modifiée
// lorsqu'on pointe dessus à partir de la variable laVoitureDeSami.
laVoitureDeSami.proprietaire; // "Yannis"
// Donc les deux variables POINTENT vers l'adresse mémoire du MEME objet.

// Si on veut créer un nouvel objet, il faut écrire une nouvelle déclaration littérale.
laVoitureDeYannis = {
    bruit: "Vroooom !",
    proprietaire: "Yannis",
    adresseMemoireDeCetteFcn: function() { // fonction assignée à une propriété : méthode
        var pouet = "alert";
        window[pouet]("Vrooooom Vrooooom !");
        // Dans une méthode le mot-clé this est référence à l'objet lui-même.
        this; // référence de l'objet lui-même
        this.proprietaire; // pointe vers la propriété propriétaire de l'objet dans lequel se trouve la méthode.
        window.alert(this.proprietaire);
    }
};

// Attention, si on déplace une méthode qui utilise le mot-clé this
// d'un objet vers un autre comme suit :
var laMaisonDeIda = {
    type: "Chateau"
};

laMaisonDeIda.adresseMemoireDeCetteFcn = laVoitureDeYannis.adresseMemoireDeCetteFcn;

// Et qu'on exécute cette méthode :

laVoitureDeYannis.adresseMemoireDeCetteFcn(); // affiche "Vrooooom Vrooooom !" puis "Yannis"
// this dans adresseMemoireDeCetteFcn pointe sur l'objet
// dans laVoitureDeYannis qui a une propriété propriétaire.
laMaisonDeIda.adresseMemoireDeCetteFcn(); // affiche "Vrooooom Vrooooom !" puis undefined
// this dans adresseMemoireDeCetteFcn pointe sur l'objet
// dans laMaisonDeIda qui n'a PAS de propriété propriétaire.

// En ES3+ les fonctions sont des objets en plus d'être des fonctions
var disBonjour = function(){
    window.alert("Bonjour");
};

// On peut ajouter une propriété à une Fonction/Objet
disBonjour.texte = "Gutten tag";

// Les Fonctions/Objets ont des méthodes. Par exemple :
disBonjour.call(); // exécute le code contenu dans la fonction.

// Lorsqu'on crée un objet de type tableau comme suit :
var unArray = [1,2,3];
// Rien ne nous empêche d'ajouter des propriété nommées par la suite.
unArray.deBus = "Ah bon !";

// Soit un objet avec des sous objets imbriqués :
var maison = {
    sonnerie: "Driiing !",
    salon: ["canapé", "tv", {
        etagereDuHaut: "livres de voyages",
        etagereDuMilieu: "des bédés",
        etagereDuBas: "des papier",
        "compartiment caché": {
            "salle à manger": [
                "papa souris",
                "maman souris",
                "bébé souris",
                function(){
                    window.alert("Ouiiik Ouuiiik");
                }
            ]
        }
    }]
};

// Pour pointer sur une valeur, on utilise le . ou les [] selon les besoins.
maison.salon[2]["compartiment caché"]["salle à manger"][3]();

// Design Pattern : fonction usine / factory function ultra basique
// Idée : créer une fonction qui utilise ses arguments comme valeur
// des propriétés d'un littéral qui sera retourné à l'exécution de
// la fonction.
var fabriquerUneMaisonBouygues = function(a,b,c){
    var maison = {
        pieceDuHaut: a,
        pieceDuBas: b,
        pieceDuMilieu: c
    };

    return maison;
};

// Utilisation de la fonction usine pour créer plusieurs objets ayant la
// même structure mais pas le même contenu en terme de valeurs :
var m1 = fabriquerUneMaisonBouygues('salon', 'cave', 'chambre');
var m2 = fabriquerUneMaisonBouygues('salon', 'sous-sol', 'bureau');

// Mecanisme du langage : fonction constructeur / constructor functions
// Les fonctions constructeur permettent de définir les caractèristiques d'un objet
// qui sera créé à l'aide de la fonction constructeur et du mot-clé new.
// Pour distinguer une fonction constructeur d'une fonction classique, on
// la nomme en commençant pas une majuscule.
var ConstructeurDeVoitures = function(p, plaque, sous){
    // Ici le mot clé this fait référence à l'objet qui SERA créé à
    // à l'aide de la fonction constructeur.
    this.modele = "Twingo"; // propriété par défaut
    // On peut utiliser toute les structures (conditions, boucles, ...) dans
    // une fonction constructeur.
    if ( p ) {
      this.proprietaire = p; // propriété du constructeur
      this["plaque d'immatriculation"] = plaque;
    } else {
      this.proprietaire = "Renault";
    }

    // Technique : utiliser un opérateur logique pour affecter une valeur par défaut
    this.prix = sous || 10000;

    this["cylindrée"] = "4CV";
    this.bruit = "Vrooom";
    this.roule = function(){ // méthode
        window.alert(this.bruit);
    }
};

// On utilise une fonction constructeur avec le mot clé new
var v1 = new ConstructeurDeVoitures("Lucy", "ABC123");
var v2 = new ConstructeurDeVoitures("Anne", "XYZ321");
var v3 = new ConstructeurDeVoitures("Akbar", "IJK789", 5000);
var v4 = new ConstructeurDeVoitures();

// Définir un prototype :
// Créer un objet qui servira de prototype :
var lapinPrehistorique = {
    cri: "Gnaaarl !",
    couleur: "Marron",
    aDesDentsDeSabre: true,
    aUnPonpon: true,
    sePresenter: function(){
        window.alert(this.cri + this.cri);
    }
};

// Créer un objet à partir de l'objet qu'on souhaite être le prototype
var lapinContemporain = Object.create(lapinPrehistorique, {
    couleur: {
        value: "blanc",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

lapinContemporain.couleur; // "blanc" : propriété propre de l'objet, n'appartient pas à son prototype.

// Si l'objet créé à partir du prototype ne possède pas la propriété
// à laquelle on cherche à accéder le moteur cherche la propriété dans le prototype.
lapinContemporain.aDesDentsDeSabre; // true : provient du prototype.

// On peut ajouter ou définir des propriétés propres à l'objet créé à partir du prototype.
lapinContemporain.cri = "Squiiik !";
lapinContemporain.intelligence = "Faible";
// Les propriétés propres de l'objet "masquent" celles qui proviennent du prototype si elles
// ont les même nom.

// On peut effacer une propriété propre de l'objet enfant. Cela n'efface pas
// la propriété qui provient du prototype. On utilise le mot-clé delete.
delete lapinContemporain.cri;

// On peut créer un objet à partir d'un objet qui a déjà un prototype.
// On peut donc créer des objets à plusieurs niveaux de prototypes.
var lapinDuTurfu = Object.create(lapinContemporain, {
    cri: {
        value: "Je m'appelle Henri !",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
// Ici l'objet "lapinDuTurFu" a pour prototype l'objet "lapinContemporain" qui
// a pour prototype l'objet "lapinPrehistorique".

// Prototypage avec fonction constructeur :
var MamanLapinContemporains = function Maman(){
    this.couleur = "blanc";
    this.intelligence = "Faible";
    this.preferences = "Carottes";
    this.mangeDesCarottes = function(){
        // fait des trucs
    }
};

// La propriété .prototype des fonctions constructeur contient un objet vide par défaut.
// Si on assigne un objet à cette propriété comme suit :
MamanLapinContemporains.prototype = lapinPrehistorique;

// Tous les objets créés à l'aide de cette fonction constructeur ont
// pour prototype l'objet qu'on a assigné à la propriété .prototype.
var l1 = new MamanLapinContemporains();
var l2 = new MamanLapinContemporains();

// BONNE PRATIQUE :

// Déclarer les propriétés propres des objets dans la fonction constructeur.
var PreparationDeGateaux = function(){
    this.ingredients = ["sucre", "farine", "beurre", "levure"];
    this.coulis = "Coulis de framboise";
}

// Mettre les méthodes dans la propriété .prototype de la fonction constructeur.
PreparationDeGateaux.prototype.mangerLeGateau = function(){
    window.alert("Miaaaam");
}

PreparationDeGateaux.prototype.humerLeGateau = function(){
    window.alert("Hmmmmmm");
}

// Tous les objets créés on des propriété propres différentes
// mais obtiennent leurs méthodes depuis leur prototype :
// => OPTIMISATION DE L'UTILISATION MEMOIRE
var g1 = new PreparationDeGateaux();
var g2 = new PreparationDeGateaux();
var g3 = new PreparationDeGateaux();

// Utiliser les [] est un sucre syntaxique pour :
var monObjet = new Array("un", "deux", "trois"); // équivaut à [];
// Array est une Fonction/Objet fondamentale du langage.

// Array posséde ses propres méthodes. Par exemple :
Array.from;
// Le prototype de Array posséde ses propres méthodes.
// Donc tous les objets créés à l'aide de Array, possèdent les méthodes du prototype de Array.

monObjet.push(); // méthode qui provient de monObjet.__proto__.push
// monObjet.from n'existe pas ni sur l'objet ni dans son prototype.
// La méthode .from appartient à l'Objet/Fonction Array.

// Une Fonction/Objet :
var salutLesGars = function(){};
// Peut avoir des méthodes :
salutLesGars.messageSecret = function(){}
// On peut exécuter la Fonction/Objet :
salutLesGars();
// On peut exécuter une méthode de la Fonction/Objet :
salutLesGars.messageSecret();

// function est un sucre syntaxique pour la fonction constructeur
// fondamentale Function qui permet de créer des objets contenant
// des instructions :
var maFonction = new Function("window.alert(\"Hello\");"); // équivaut à function(){ window.alert("Hello"); }

// maFonction référence une fonction comme n'importe quelle autre :
maFonction(); // pour exécuter son code.
