"use strict";
// Création d'une "fuite de mémoire"
// Utilisation des onglets performances et mémoire (de Chrome)
var i = 'Message';
window.setInterval(function(){
  i = i + ' Message';
}, 0);
// La variable i va se "remplir" indéfiniment.
/**
 * Utiliser l'onglet Performance pour détécter la fuite de mémoire.
 *  - S'intéresser particulièrement à la JS Heap (allocation dynamique de mémoire pour JS).
 * Utiliser l'onglet Memory pour identifier la source de la fuite de mémoire.
 *  - Utiliser l'option Allocation Timeline et regarder la consommation mémoire détaillée.
 */

// Notion de vocabulaire : callback ou fonction de rappel.
// Soit une fonction qui prend en paramètre une autre fonction.
var executeur = function(unCallback){
    unCallback();
}
// La fonction à fournir à la fonction exécuteur s'appelle un callback ou fonction de rappel.
executeur(function(){
    // instructions.
});
