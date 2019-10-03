"use strict";

// Déclaration littérale :
var monObjet = {
    proprieteUn: 9,
    proprieteDeux: 10,
    proprieteTrois: 11,
    proprieteQuatre: 12
};

monObjet.proprieteDeux;
monObjet["proprieteDeux"];
// Boucler à travers les propriétés d'un objet.
for(var nomDePropriete in monObjet) {
    nomDePropriete; // contiendra tour à tour : "proprieteUn" puis "proprietDeux" puis...
    monObjet[nomDePropriete]; // pointe tour à tour vers : 9, 10, 11, ...
    monObjet.hasOwnProperty(nomDePropriete); // donne true si la propriété est une propriété de l'objet, false si elle appartien à son prototype
    if (monObjet.hasOwnProperty(nomDePropriete)) {
        monObjet[nomDePropriete];
    }
}

// Déclarer plusieurs gestionnaires d'évènements pour plusieurs élèments dans une boucle
window.onload = function(){
    // On récupére une collection d'elements HTML
    var unArrayDeHTMLDivElement = window.document.getElementsByTagName('div');

    /**
     * Attacher un gestionnaire d'évènement à plusieurs
     * elements HTML referencés dans une collection
     * d'elements HTML.
     */

    // *******************************
    // Sans utiliser let, technique traditionnelle
    var attacherEvt = function(indice) {
        unArrayDeHTMLDivElement[indice].onclick = function(){
            console.log(indice);
        }
    }

    for(var i = 0; i < unArrayDeHTMLDivElement.length; i++) {
        attacherEvt(i);
    }

    // *******************************
    // Avec let, technique plus récente
    for(let i = 0; i < unArrayDeHTMLDivElement.length; i++) {
        unArrayDeHTMLDivElement[i].onmouseover = function(){
            console.log(i);
        }
    }

    var HTMLPElement = window.document.getElementById("ceParagraphe");
    HTMLPElement.onclick = function(){
        // this est la référence à l'objet contenant cette méthode;
        // a savoir l'objet référencé dans la variable HTMLPElement.
        this.style.color = "red";
    };

    var HTMLPCollection = window.document.getElementsByTagName("p");
    for (var property in HTMLPCollection) {
        if (!isNaN(property)) {
            HTMLPCollection[property]; // property est : 0 puis 1 puis 2 ...
        }
    }
}

// Créer un objet à partir d'un objet qui sert de prototype :
var lePrototype = {};

var objetDeDefinitionDeProprietes = {
    nomDePropriete: {
        value: "Une valeur",
        writable: true,
        enumerable: true,
        configurable: true
    }
};

var leProduitFini = Object.create(lePrototype, objetDeDefinitionDeProprietes);

leProduitFini.nomDePropriete; // "une valeur"

/**
 * Comparaison des déclaration en ES5 et - et ES6 et +
 */

// Créer une "classe" en ES6+
class FilsEnES6 {
    // Fonction constructeur
    constructor(){
        this.prenom = "sami";
    }

    // Méthode du prototype
    unMethode() {
        window.alert(this.prenom);
    }
}

// Créer la MEME "classe" en ES5-
function FilsEnES5 (){
    this.prenom = "sami";
}

FilsEnES5.prototype.uneMethode = function(){
    window.alert(this.prenom);
}