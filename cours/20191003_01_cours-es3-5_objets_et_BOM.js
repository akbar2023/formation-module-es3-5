"use strict";
//var tableau = ["a","b","c"];
/*for (var i = 0; i < tableau.length; i++) {
  tableau[i] = "La lettre " + tableau[i];
}*/

// ["La lettre a", "La lettre b", "La lettre c"]

var executerUneFonctionPourChaqueIndice = function(uneFonction, unTableau) {
  var nouveauTableau = [];
  for (var i = 0; i < unTableau.length; i++) {
    nouveauTableau[i] = uneFonction(unTableau[i]);
  }
  return nouveauTableau;
}

var tableau       = ["a","b","c"];
var tableauRetour = executerUneFonctionPourChaqueIndice(function(valeurFournie){
  return "La lettre " + valeurFournie;
}, tableau); // => ["La lettre a", "La lettre b", "La lettre c"]

var autreTableau       = ["w", "x","y","z"];
var autreTableauRetour = executerUneFonctionPourChaqueIndice(function(valeurFournie){
  return "La lettre " + valeurFournie;
}, autreTableau); // => ["La lettre w", "La lettre x", "La lettre y", "La lettre z"]

// Gestion des evenements avec .addEventListener()
window.addEventListener("DOMContentLoaded", function(){
  var HTMLDivElements = window.document.getElementsByTagName("div");
  if (HTMLDivElements.length) {
    // Assignation d'un gestionnaire d'évenement à un élement.
    HTMLDivElements[0].addEventListener("click", function auClicSurLaDiv(evtSouris){
      // Instructions au clic sur la première div du document.
      // evtSouris sera un objet de type MouseEvent.
      // Retirer un getionnaire d'évenement d'un élement.
      HTMLDivElements[0].removeEventListener(auClicSurLaDiv);
    });
  }

});
window.addEventListener("load", function(){});

// $ et _ sont des nom de variables autorisés.
var $;
var _;

// Définir le prototype à utiliser avec une fonction constructeur :
var ConstructeurDeVoitures = function(){
  this.xyz;
}

// ConstructeurDeVoitures.prototype = ???; // Ici on peut redéfinir entièrement le prototype à utiliser.

// Ou enrichir le prototype par défaut (qui est un objet vide par défaut)
/*
ConstructeurDeVoitures.prototype.methode1 = function(){};
ConstructeurDeVoitures.prototype.methode2 = function(){};
ConstructeurDeVoitures.prototype.methode3 = function(){};
*/

var obj1 = new ConstructeurDeVoitures();

// obj1.methode2(); // méthode du prototype

// Ecrire un switch pour gérer les cas qui doivent aboutir à un résultat similaire
var cas = "Twingo";

switch(cas) {
  case "Clio":
  case "Twingo":
  case "Megane":
    window.alert("Renault");
    break;
  case "C3":
  case "C4":
  case "C5":
    window.alert("Citroën");
    break;
  default:
    window.alert("Constructeur inconnu !");
}