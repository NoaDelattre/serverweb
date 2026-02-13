alert("Hello World!");

// Saisie nombre
var N = prompt("Entrer un nombre");
var resultat = 0;

// Boucle for Calcul factoriel de 1 à N
for (let i = 1; i <= N; i++){
    resultat = resultat + i;
}

// Afficher le résultat
alert(resultat);
