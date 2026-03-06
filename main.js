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

function ModifText(letext){
    alert("je vais modifier les divs");
    const mesDivs = document.getElementsByName(div,"lesdivs");
    for (let i = 0; i < N; i++){        
        console.log(mesDivs[i].tagName);
        mesDivs.textContent = letext;
    }   
}
ModifText("Hello","Bonjour","Julien Code");