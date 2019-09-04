"use strict";

// Ce fichier est chargé dans un fichier HTML
// 5 types de données :
// - Number
// - String
// - Boolean
// - Function
// - Object
// => Sous-type : Array

// Retour sur les fonctions
var maFonction = function(){
  arguments;
  arguments[0]; // "a"
  arguments[1]; // "b"
  arguments[72]; // undefined

  return arguments[2];
}

maFonction("a","b","c"); // donne "c"

// Exécution de fonctions à la chaîne

var f1 = function(){};
var f2 = function(){};
var f3 = function(){};
var f4 = function(){};
var f5 = function(){};
var f6 = function(){};
var f7 = function(){};
var f8 = function(){};
var f9 = function(){};
var f10 = function(){};

var lesFonctions = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

var executeurDeFonctions = function(){
    for(var compteur = 0; lesFonctions[compteur]; compteur++) {
        lesFonctions[compteur]();
    }
}

executeurDeFonctions();
executeurDeFonctions();

// Les Objets :
({}); // déclaration littérale en Notation Objet JavaScript

({
    "margin-left": 42, // propriété ("variable" dans un objet)
    marginTop: -12
});

var laVoitureDeSami = {
    bruit: "Vroooom !",
    proprietaire: "Sami",
    8: "Salut"
};

laVoitureDeSami.bruit; // pointe sur la propriété bruit de l'objet
laVoitureDeSami["bruit"]; // pointe sur la propriété bruit de l'objet.
laVoitureDeSami[8]; // pointe sur la propriété 8 de l'objet.

var laVoitureDeYannis = laVoitureDeSami;

laVoitureDeYannis["proprietaire"] = "Yannis";
laVoitureDeSami.proprietaire; // "Yannis"

laVoitureDeYannis = {
    bruit: "Vroooom !",
    proprietaire: "Yannis",
    adresseMemoireDeCetteFcn: function() { // fonction assignée à une propriété : méthode
        var pouet = "alert";
        window[pouet]("Vrooooom Vrooooom !");
        this; // référence de l'objet lui-même
        this.proprietaire; // pointe vers la propriété propriétaire de l'objet dans lequel se trouve la méthode.
    }
};

var laMaisonDeIda = {
    type: "Chateau"
};

laMaisonDeIda.adresseMemoireDeCetteFcn = laVoitureDeYannis.adresseMemoireDeCetteFcn;

laVoitureDeYannis.adresseMemoireDeCetteFcn();

laMaisonDeIda.adresseMemoireDeCetteFcn();

// En ES3+ les fonctions sont des objets en plus d'êtres des fonctions
var disBonjour = function(){
    window.alert("Bonjour");
};

disBonjour.texte = "Gutten tag";

disBonjour.call();


var unArray = [1,2,3];
unArray.deBus = "Ah bon !";

var maison = {
    sonnerie: "Driiing !",
    salon: ["canapé", "tv", {
        etagereDuHaut: "livres de voyages",
        etagereDuMilieu: "des bédés",
        etagereDuBas: "des papier",
        "compartiment caché": {
            "salle à manger": [
                "papa souris",
                "maman souris",
                "bébé souris",
                function(){
                    window.alert("Ouiiik Ouuiiik");
                }
            ]
        }
    }]
};

maison.salon[2]["compartiment caché"]["salle à manger"][3]();

// Design Pattern : fonction usine / factory function ultra basique
var fabriquerUneMaisonBouygues = function(a,b,c){
    var maison = {
        pieceDuHaut: a,
        pieceDuBas: b,
        pieceDuMilieu: c
    };

    return maison;
};

var m1 = fabriquerUneMaisonBouygues('salon', 'cave', 'chambre');
var m2 = fabriquerUneMaisonBouygues('salon', 'sous-sol', 'bureau');

// Mecanisme du langage : fonction constructeur / constructor functions
var ConstructeurDeVoitures = function(p, plaque, sous){
    this.modele = "Twingo"; // propriété par défaut
    if ( p ) {
      this.proprietaire = p; // propriété du constructeur
      this["plaque d'immatriculation"] = plaque;
    } else {
      this.proprietaire = "Renault";
    }

    // Technique : utiliser un opérateur logique pour affecter une valeur par défaut
    this.prix = sous || 10000;

    this["cylindrée"] = "4CV";
    this.bruit = "Vrooom";
    this.roule = function(){ // méthode
        window.alert(this.bruit);
    }
};

// On utilise les fonctions constructeur avec le mot clé new
var v1 = new ConstructeurDeVoitures("Lucy", "ABC123");
var v2 = new ConstructeurDeVoitures("Anne", "XYZ321");
var v3 = new ConstructeurDeVoitures("Akbar", "IJK789", 5000);
var v4 = new ConstructeurDeVoitures();



// Objet :
var lapinPrehistorique = {
    cri: "Gnaaarl !",
    couleur: "Marron",
    aDesDentsDeSabre: true,
    aUnPonpon: true,
    sePresenter: function(){
        window.alert(this.cri + this.cri);
    }
};

var lapinContemporain = Object.create(lapinPrehistorique, {
    couleur: {
        value: "blanc",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

lapinContemporain.cri = "Squiiik !";
lapinContemporain.intelligence = "Faible";

// delete lapinContemporain.cri;

var lapinDuTurfu = Object.create(lapinContemporain, {
    cri: {
        value: "Je m'appelle Henri !",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// Prototypage avec fonction constructeur :
var MamanLapinContemporains = function Maman(){
    this.couleur = "blanc";
    this.intelligence = "Faible";
    this.preferences = "Carottes";
    this.mangeDesCarottes = function(){
        // fait des trucs
    }
};

MamanLapinContemporains.prototype = lapinPrehistorique;

var l1 = new MamanLapinContemporains();
var l2 = new MamanLapinContemporains();


var PreparationDeGateaux = function(){
    this.ingredients = ["sucre", "farine", "beurre", "levure"];
    this.coulis = "Coulis de framboise";
}

PreparationDeGateaux.prototype.mangerLeGateau = function(){
    window.alert("Miaaaam");
}

PreparationDeGateaux.prototype.humerLeGateau = function(){
    window.alert("Hmmmmmm");
}

var g1 = new PreparationDeGateaux();
var g2 = new PreparationDeGateaux();
var g3 = new PreparationDeGateaux();

var monObjet = new Array("un", "deux", "trois"); // équivaut à [];

Array.from;
// monObjet.from ; n'existe pas ni sur l'objet ni dans son prototype
monObjet.push(); // méthode provient monObjet.__proto__.push



var salutLesGars = function(){};

salutLesGars.messageSecret = function(){}

salutLesGars();

salutLesGars.messageSecret();

var maFonction = new Function("window.alert(\"Hello\");"); // function(){ window.alert("Hello"); }


























