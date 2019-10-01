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
            return addSum(i, sum, myArguments);
        } else {
            return sum / i;
        }
    }
    // Lancement de la récusion
    return recursion(0, 0, arguments);
}

moyenneRecursive(1,2,3);