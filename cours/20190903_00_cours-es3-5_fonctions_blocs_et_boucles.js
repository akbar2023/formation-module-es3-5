"use strict";

// Ce fichier est chargé dans un fichier HTML
// 5 types de données :
// - Number
// - String
// - Boolean
// - Function
// - Object
// => Sous-type : Array

// Opérateur problèmatique :
// + est utilisé pour l'addition ET pour la concaténation
"2" + 2; // "22"
"2" * 1; // 2
"2" * 1 + 2; // 4
3 + 3; // 6

parseFloat;
parseInt;

parseFloat("52"); // donne 52
parseFloat("5.2 degrés"); // donne 5.2
parseInt("5.2 degrés"); // donne 5
parseInt("la tête de toto"); // donne NaN

// Créer des fonctions :

// FONCTION NOMMEE :

// Déclarer une fonction nommée et l'assigner à une variable.
var salutation = function bonjour(){};
// Créer une copie de la référence à la fonction.
var salamalek = salutation;
// Exécuter la fonction nommée.
salutation();

// FONCTION ANONYME :

// Déclarer une fonction anonyme et l'assigner à une variable.
var maFonctionAnonyme = function(){
    // Des instructions
};
// Exécuter la fonction anonyme.
maFonctionAnonyme();

// FONCTIONS AVEC ARGUMENTS :

// Les fonctions peuvent être déclarées avec des arguments.

// Déclarer une variable dans le contexte (scope) de mémoire principal.
var quantite = 400;

// Déclarer une fonction nommée assignée à une variable avec 2 arguments.
var maFonction = function donnezMoiDesSous(quantite, monnaie) {
    // Déclarer une variable dans le contexte de mémoire
    // qui sera réservé pour l'éxécution de la fonction.
    var interet  = quantite * 0.2;
    alert(interet + monnaie);
    // retournée une valeur à l'extérieur du contexte.s
    return interet;
}

// Exécuter la fonction pour récupérer une valeur de retour.
var valeurRetournee = maFonction(200, '€');
// Exécuter la fonction pour sa valeur de retour dans une opération arithmétique
var interetEnEuroParInteretsEnDollar = maFonction(100, '$') * valeurRetournee;

// FONCTION AVEC FONCTION EN ARGUMENT :

// Déclarer une fonction qui attend 1 fonction, 1 Array et un 3ème paramètre en entrée.
var monAutreFonction = function(a,b,c) {
    interetEnEuroParInteretsEnDollar;
    // Variable utilisable ici car déclarée dans le
    // contexte de mémoire de plus haut niveau.
    // Fonction attendue en paramètre exécutée ci-après :
    a();
    // Array attendu en entrée utilisé ci-après :
    b[2];
    c; // contient undefined
}

// Exécution de la fonction avec 1 fonction en paramètre et 1 Array en paramètre.
monAutreFonction(function(){
    // blablabla
}, ["un","deux","trois"]);

// Exécution d'une "fonction" native du langage qui prend en paramètre 1 fonction et 1 nombre.
setTimeout(function(){
    alert("Salut les gens !");
}, 10000);

// FONCTION QUI RETOURNE UNE FONCTION

// Déclaration d'une fonction qui retourne une valeur qui est une fonction.
var encoreUneFonction = function(){

    // Déclarer une variable dans le contexte de cette fonction.
    var message = "Ceci est un message ! +1000000 lignes";

    // Retourner une fonction qui utilise cette variable.
    return function(){
        // La variable message est accessible ici car déclarée dans le contexte au niveau supérieur.
        alert(message);
    }
}

// Exécuter la fonction qui retourne une fonction et assigner la fonction retournée à une variable.
var vientParIciMonPetit = encoreUneFonction();

// Exécuter la fonction retournée plusieurs fois :
// La variable message est utilisée 3 fois mais déclarée 1 fois !
vientParIciMonPetit();
vientParIciMonPetit();
vientParIciMonPetit();

// IFE : Fonctions Exécutées Immediatement :
// Permet de créer un contexte de mémoire isolé du contexte du programme principal
(function(){

    var maVariableAMoiToutSeul = "Mouahahahaha !";
    alert(maVariableAMoiToutSeul);

}());

var uneVariablePartageeAvecToutleMonde = "Bof bof !";

// COMBINONS IFE ET CLOSURES :
var afficheLesValeurDuTableau = (function(){
    var monTableau = [
        "hello",
        "holà",
        "toto",
        "tata",
        "bye",
        "..."
    ];

    return function(){
        var compteur = 0;
        while( monTableau[compteur] ) {
            alert(monTableau[compteur]);
            compteur++;
        }
    }
}());

afficheLesValeurDuTableau();
afficheLesValeurDuTableau();
afficheLesValeurDuTableau();

// Exemple de déclarations.
// Se terminent toujours par un ;
var titi1 = 10;
var titi2 = "un texte";
var titi3 = [];
var titi4 = function(){};

var titi5 = titi4();

if (titi1) {
    alert('hello');
} else if(condition) {
    alert('bye');
} else {
    alert('tag');
}

