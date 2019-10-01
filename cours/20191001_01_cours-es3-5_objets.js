"use strict";
// Calcul de moyenne :
// 2 possibilité :
// Boucle :
var moyenneAvecBoucle = function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum / i;
}

moyenneAvecBoucle(1,2,3);

// Récursion :
var moyenneRecursive = function(){
    // Fonction récursive
    var recursion = function(i, sum, myArguments) {
        if (i < myArguments.length) {
            sum = sum + myArguments[i];
            i++;
            return recursion(i, sum, myArguments);
        } else {
            return sum / i;
        }
    }
    // Lancement de la récusion
    return recursion(0, 0, arguments);
}

moyenneRecursive(1,2,3);

// Comment créer 1000 variables ?
// Toutes les variables déclarée dans l'espace global
// sont en réalité des propriété de l'objet global window :

window.alert();    //est la même chose que
window["alert"]();

var maVariable       = 10; // est la même chose que
window.maVariable    = 10; // est la même chose que
window["maVariable"] = 10;

for(var i = 0; i < 1000; i++) {
    window["laVariableNumero" + i] = "Salut les gens !";
}

// Comment ajouter une propriété à un objet après sa délaration ?

var monObjet = {
    propriete: 34634,
    autrePropriete: "egsdgs"
};

monObjet.encoreUneAutrePropriete = [];

// Ecrire une boucle avec while... et avec do... while...

// Oblige l'utilisateur à saisir un texte :
var saisie = null;
while( null === saisie || "" === saisie ) {
    saisie = prompt("Saisissez un texte ?");
}

saisie; // ici saisie contient forcément un texte.

// Même construction avec do... while
var saisie;
do {
    saisie = prompt("Saisissez un texte ?");
} while( null === saisie || "" === saisie )

// Reference circulaire
var vaisseau = {
    nom: "enterprise",
    equipage: []
};

var equipier1 = {
    nom: "Kirk",
    prenom: "James Tiberius",
    sonVaisseau: vaisseau
};

var equipier2 = {
    nom: "Spock",
    prenom: "Michel",
    sonVaisseau: vaisseau
};

vaisseau.equipage = [
    equipier1,
    equipier2
];

// Utiliser la référence circulaire
vaisseau.equipage[0].sonVaisseau.nom; // "Enterprise"
vaisseau.equipage[0].sonVaisseau.equipage[1].nom; // "Spock"
vaisseau.equipage[0].sonVaisseau.equipage[1].sonVaisseau.equpage[0].nom; // "Kirk"

