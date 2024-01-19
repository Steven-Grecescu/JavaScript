// function clicP1(){
//     let P1 = document.querySelector("#partie1")
//     P1.classList.toggle("selected");
// }

// function clicP2(){
//     let P2 = document.querySelector("#partie2")
//     P2.classList.toggle("selected");
// }

// function clicP3(){
//     let P3 = document.querySelector("#partie3")
//     P3.classList.toggle("selected");

// }

//2)

// function selection(){
//     let input = document.querySelector("input");
//     input.classList.add("selected");
//     input.classList.remove("deselected");
// }

// function deselection(){
//     let input = document.querySelector("input");
//     input.classList.add("deselected");
//     input.classList.remove("selected");
// }

// function SelectionBEP(){
//     console.log("BEP");
// }

//3)
btn1 = document.querySelector("#btn1");
parti1 = document.querySelector("#partie1");
btn1.addEventListener("click", function(){
    parti1.classList.toggle("selected");
    
});

btn2 = document.querySelector("#btn2");
parti2 = document.querySelector("#partie2");
btn2.addEventListener("click", function(){
    parti2.classList.toggle("selected");
    
});

btn3 = document.querySelector("#btn3");
parti3 = document.querySelector("#partie3");
btn3.addEventListener("click", function(){
    parti3.classList.toggle("selected");
    
});

//4)

input1 = document.querySelector("#input1");
input1.addEventListener("focus", function(){
    input1.style.backgroundColor = "green";
});
input1.addEventListener("blur", function(){
    input1.style.backgroundColor = "gray";
});
////////////////////////////////////////////////
input2 = document.querySelector("#input2");
input2.addEventListener("focus", function(){
    input2.style.backgroundColor = "green";
});
input2.addEventListener("blur", function(){
    input2.style.backgroundColor = "gray";
});
////////////////////////////////////////////////
input3 = document.querySelector("#input3");
input3.addEventListener("focus", function(){
    input3.style.backgroundColor = "green";
});
input3.addEventListener("blur", function(){
    input3.style.backgroundColor = "gray";
});

//5)
morse = document.querySelector("#morse");
resultat = document.querySelector("#resultat");
morse.addEventListener("input", function(){
    let val = this.value.slice(-1);
    switch (val) {
        case "a":
            val = ".-";
            break;
        case "b":
            val = "-...";
            break;
        case "c":
            val = "-.-.";
            break;
        case "d":
            val = "-..";
            break;
        case "e":
            val = ".";
            break;
        case "f":
            val = "..-.";
            break;
        case "g":
            val = "--.";
            break;
        case "h":
            val = "....";
            break;
        case "i":
            val = "..";
            break;
        case "j":
            val = ".---";
            break;
        case "k":
            val = "-.-";
            break;
        case "l":
            val = ".-..";
            break;
        case "m":
            val = "--";
            break;
        case "n":
            val = "-.";
            break;
        case "o":
            val = "---";
            break;
        case "p":
            val = ".--.";
            break;
        case "q":
            val = "--.-";
            break;
        case "r":
            val = ".-.";
            break;
        case "s":
            val = "...";
            break;
        case "t":
            val = "-";
            break;
        case "u":
            val = "..-";
            break;
        case "v":
            val = "...-";
            break;
        case "w":
            val = ".--";
            break;
        case "x":
            val = "-..-";
            break;
        case "y":
            val = "-.--";
            break;
        case "z":
            val = "--..";
            break;
    }
    resultat.value += val;


});

//6

let FormCalc=document.getElementById("FormCalc");
let Nombre1=document.getElementById("Nombre1");
let Nombre2=document.getElementById("Nombre2");
let Operateur=document.getElementById("Operateur");
let ResultatOperation=document.getElementById("ResultatOperation");

function submitForm(event){
   event.preventDefault();
   ResultatOperation.innerHTML = " = " + eval(Nombre1.value + Operateur.value + Nombre2.value);
}
FormCalc.addEventListener('submit', submitForm);



