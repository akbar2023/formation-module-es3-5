"use strict";

// IFE : Immediate Function Execution
(function(){
    // Instructions dans un contexte/scope séparé du contexte/scope principal.
}());

function disBonjour(){
    return 'Bonjour !';
}

var retour = disBonjour();
retour; // contient 'Bonjour'


var something = function(){
    confirm('Fais ton choix');
}

var somethingElse = function(){
    // Demande à l'utilisateur de faire un choix
    var monChoix = confirm('Fais ton choix !');
    // On récupére la valeur de retour dans la variable monChoix
    alert(monChoix);
    // On affiche la valeur de monChoix dans une boite de dialogue
}

// <p onclick="something();">
// <p onclick="somethingElse();">

var obj = {
    fcn1: function(){},
    fcn2: function(){},
    fcn3: function(){},
    fcn4: function(){},
    fcn5: function(){}
};

//obj.fcn1();
//obj["fcn1"]();

for(var i = 1; i <=5; i++) {
    obj["fcn" + i]();
}
