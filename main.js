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

// Clic souris
function UneProcedureQuiChangeLeText(evenement){
    // Attention aux majuscules
    evenement.target.innerHTML = "On m'a cliqué dessus";
}

// Autres méthodes événement avec la souris
var compteur = 0;
var compteur2 = 0;


// Clic souris
var MaDiv2 = document.getElementById("methode2");
MaDiv2.addEventListener("click", UneProcedureQuiChangeleText2);

// Survol souris
MaDiv2 = document.getElementById("methode3");
MaDiv2.addEventListener("mouseover", UneProcedureQuiSurvole);

// Ecriture clavier
MaDiv2 = document.getElementById("methode4");
MaDiv2.addEventListener("keydown", UneProcedureQuiEcrit);


/*
    FONCTIONS
*/

// Clic souris 
function UneProcedureQuiChangeleText2(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois.";
    if(evenement.target.id == "methode2"){
        evenement.target.className = "divE"; // Pas de Div2, car la condition serait toujours fausse
    }
    
}

// Survol souris
function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois.";
    if(evenement.target.id == "methode3"){
        let elt1 = document.getElementById("methode3");
        elt1.style.color = "black";
    }
}

// Ecriture clavier
function UneProcedureQuiEcrit(evenement){
    evenement.target.innerHTML = "On m'a cliqué sur : "+evenement.key;
    if(evenement.target.id == "methode4"){
        let elt1 = document.getElementById("methode4");
        elt1.style.color = "green";
    }   
}



// Test du bouillonnement 
//var maDiv = document.getElementById("methode67");
//maDiv.onclick = function(){alert('Bouton cliqué')};