"use strict";
/**
 *  Gérer un évènement à l'aide d'un :
 *  - gestionnaire d'évènement
 *  - ou event handler
 *  - ou écouteur d'évènement
 *  - ou event listener
*/
window.onload = function cetteFonctionSAppelleUnGestionnaireDEvenement(unTruc){
    window.document.body.style["background-color"] = "red";
    window.document.body.children[0].style.color = "blue";
    var referenceVersObjetP = window.document.getElementById("ceParagraphe");
    referenceVersObjetP.style.fontSize = "24px";
};

window.onclick = function(){
    var augmenterLaPolice = function(){
        var referenceVersObjetP = window.document.getElementById("ceParagraphe");
        var tailleDePolice = referenceVersObjetP.style.fontSize;
        var tailleDePoliceEnNombre = parseFloat(tailleDePolice);
        tailleDePoliceEnNombre = tailleDePoliceEnNombre + 0.1;
        referenceVersObjetP.style.fontSize = tailleDePoliceEnNombre + "px";
    };

    window.setInterval(augmenterLaPolice, 50);
}

var retour = window.setTimeout(function(){
    window.alert("coucou");

}, 5000);

retour; // contient un identifiant unique sous forme de nombre pour ce compte à rebours.

window.clearTimeout(retour);

var retour2 = window.setInterval(function(){
    window.alert("coucou");
}, 5000);

window.clearInterval(retour2);

var aExecuter = function(info){
    window.console.log("Coucou", info);
    window.requestAnimationFrame(aExecuter);
};

aExecuter();

var somme = 20;

window.setTimeout(function(){

}, 5000);

setInterval(function(){
    window.alert(somme);
}, 1000);


var monChien = {
    cri: "Waf !",
    aboiement: function(){
        /**
         * L'utilisation de la portée des variables
         **/
        var moiMeme = this;
        window.setInterval(function(){
            window.alert(moiMeme.cri);
        }, 1000);
        /**
         * Avec .bind()
         */
        // Version avec variables intermédiaires */
        var trucAFaire = function(){
            window.alert(this.cri);
        };
        trucAFaireAvecThisFixe = trucAFaire.bind(this);
        window.setInterval(trucAFaireAvecThisFixe, 1000);
        // Version sans variables intermédiaires
        window.setInterval(function(){
            window.alert(this.cri);
        }.bind(this), 1000);
        /**
         * Fonction flèches
         */
        window.setInterval( () => {
            window.alert(this.cri);
        })
    }
};

monChien.aboiement();