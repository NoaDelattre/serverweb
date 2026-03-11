alert("Hello World!");

// Exercice 8

//function ModifText(letext){
    //alert("je vais modifier la div");
    //const maDiv = document.getElementById("maDiveNum1");
    //maDiv.textContent = letext;
//}
//ModifText("Hello");

// Exercice 9

var N = prompt("Entrer un nombre");

function ModifText(lestext){
    alert("je vais modifier les divs");
    for (let i = 0; i < N; i++){                  
        const upNames = document.getElementsByName("lesdivs");
        console.log(upNames[0].tagName); // affiche "INPUT"
        upNames[i].value = lestext[i];
    }   
}
ModifText(["Hello","Bonjour","Julien Code","67"]);