alert("Hello World!");

// Saisie nombre
var N = prompt("Entrer un nombre");
var resultat = 0;
var j = 0;
function addition(param1, param2){
    resultat = resultat + j;
};

// Boucle for Calcul factoriel de 1 à N
for (let i = 1; i <= N; i++){
    j = i;
    addition();   
};

// Afficher le résultat
alert(resultat);