"use strict";
/**
* Introduction
*/

// JavaScript n'a aucun lien avec Java à part le nom.
// JavaScript est un dialecte de l'ECMAScript
// La documentation officielle du JavaScript est sur le MDN.
// MDN : Mozilla Developper Network
// Un évangeliste important du JavaScript : Douglas Crockford
// 2 livres importants : Eloquent JavaScript et JavaScript : The Good Parts.
// Les versions modernes de l'ECMAScript ne fonctionne pas forcément dans tous les navigateurs.
// On a besoin d'un "transpilateur" pour transformer l'ECMAScript en une version plus ancienne avec plus de compatibilité.
// Les moteurs ECMAScript de navigateurs sont différents et donc le code ECMAScript peut avoir des syntaxes différentes.
// Les moteurs graphiques de navigateurs sont différents et donc le DOM peut avoir une structure différente.
// Le site https://www.quirksmode.org permet d'en savoir plus sur la compatibilité du DOM.

/**
 * Le langage : Syntaxe et type de données
 */
// Nombres : Number
10;
1.6;
.6; // correspond à 0.6
0.6;
-5;
Infinity;
NaN;
// Chaîne de caractères : String
'hello ! l\'ami';
"holà ! <p class='rouge'>Hombre</p>";
// Booléens : Boolean
true;
false;
// Fonctions : Function
(function(){
    // instructions
}); // fonction anonyme

function jeanMichel(){
    // instructions
}; // fonction nommée
// Les Objets : Object
{}; // objet vide en notation littérale
// => Sous type d'objet :
[]; // objet vide de type Array
// => Autre type d'objet :
null;

// Dernier type de données :
undefined;

/**
 * Les opérateurs arithmétiques
 */
2 / 4; // division avec /
1 + 3; // addition avec +
1 - 4; // soustraction -
1 * 7; // multiplication *
// ++ incrémentation
// -- décrémenation
4 % 2; // 0 : % reste entier de la division
5 % 2; // 1 : % reste entier de la division

/**
 * Opérateurs de comparaisons
 */
13 * 10; // 130
13 === 10; // false
13 >= 10; // true
// ...

/**
 * Opérateurs logiques
 */
true && false; // donne false : ET logique, si 1 booléen est false le résultat final false
true || false; // donne true : OU logique, si 1 booléen est true le résultat final est true
!true; // donne false : NON logique (donne le booléen inverse).

/*
* Blocs conditionnels avec le mots clés if et else
*/
if ( true ){
    // le moteur exécute toujours cette instruction
}

if ( false ) {
    // le moteur n'exécute jamais cette instruction
}

if ( false ) {
    // le moteur n'exécute jamais cette instruction
} else {
    // le moteur exécute toujours cette instruction
}
/**
* Boucles avec while
*/
while( false ) {
    // le moteur n'exécute jamais cette instruction
}
/*
while( true ) {
    // le moteur exécute toujours cette instruction
}
*/

/**
 * Les variables
**/
var espaceMemoire;

espaceMemoire = 45;
// On peut assigner des valeurs aux variables.
// Ces valeurs peuvent être de 1 des 5 types disponibles.
var autreEspaceMemoire;
autreEspaceMemoire = espaceMemoire * 2;
espaceMemoire = espaceMemoire / 5;

var calculLogique;

calculLogique = 12 >=4 && 26 === 'titi' || 32 != 16;

if ( calculLogique ) {
    // Alors tu viens ou pas ?
}

var compteur = 0;
var autreCalcul = compteur < 5;
// autreCalcul pointe sur true
while(autreCalcul){
  // ici je peux écrire des instructions qui se produiront 5 fois


  compteur = compteur + 1;
  autreCalcul = compteur < 5;
}
/** Transformation en for */
/*
for(var compteur = 0;autreCalcul = compteur < 5;compteur = compteur + 1;){

}
*/
var gare;

gare = [function(){},'sac à dos','appareil photos','casque',['poulet','drogue'],'bébé','chaussures','livres recommandés','parapluie','gilet jaune',42];

gare[3]; // pointe sur 'casque'
gare[4]; // pointe sur ['poulet','drogue']
gare[4][1]; // pointe sur 'drogue'
gare[0]; // pointe sur function(){}
gare[0](); // exécute la fonction





















