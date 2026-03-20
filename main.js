alert("Hello World!");

// Exercice 8

//function ModifText(letext){
    //alert("je vais modifier la div");
    //const maDiv = document.getElementById("maDiveNum1");
    //maDiv.textContent = letext;
//}
//ModifText("Hello");

// Exercice 9

//var N = prompt("Entrer un nombre");

//function ModifText(lestext){
    //alert("je vais modifier les divs");
    //for (let i = 0; i < N; i++){                  
        //const upNames = document.getElementsByName("lesdivs");
        //console.log(upNames[0].tagName); // affiche "INPUT"
        //upNames[i].value = lestext[i];
    //}   
//}
//ModifText(["Hello","Bonjour","Julien Code","67"]);

// Exercice 10

// Test changement de texte avec un clic
var MaDiv = document.getElementById("MaDiveNum1");

MaDiv.addEventListener("click", UneProcedureQuiChangeLeText);

function UneProcedureQuiChangeLeText(evenement){
    // Attention aux majuscules
    evenement.target.innerHTML = "On m'a cliqué dessus";
}

// Autres méthodes événement avec la souris
var compteur = 0;
var compteur2 = 0;

var MaDiv2 = document.getElementById("methode2");
MaDiv2.addEventListener("click", UneProcedureQuiChangeLeText);

MaDiv2 = document.getElementById("methode3");
MaDiv2.addEventListener("mouseover", UneProcedureQuiSurvole);

MaDiv2 = document.getElementById("methode4");
MaDiv2.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement){
    evenement.target.innerHTML = "On m'a cliqué sur : "+evenement.key;
}

function UneProcedureQuiChangeleText2(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois.";
}

function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois.";
}





// Test du bouillonnement 
//var maDiv = document.getElementById("methode67");
//maDiv.onclick = function(){alert('Bouton cliqué')};