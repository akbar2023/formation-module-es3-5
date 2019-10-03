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

// Gestion des evenements :
window.addEventListener("DOMContentLoaded", function(){
  var HTMLDivElements = window.document.getElementsByTagName("div");
  if (HTMLDivElements.length) {
    // Assignation d'un gestionnaire d'évenement à un élement.
    HTMLDivElements[0].addEventListener("click", function auClicSurLaDiv(evtSouris){
      // Instructions au clic sur la première div du document.
      // evtSouris sera un objet de type MouseEvent.
    });

    // Retirer un getionnaire d'évenement d'un élement.
    HTMLDivElements[0].removeEventListener(auClicSurLaDiv);
  }

});
window.addEventListener("load", function(){});

