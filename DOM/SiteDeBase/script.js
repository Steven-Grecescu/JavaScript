// alert("Hello World!");
// let nombre = prompt("Saisir un nombre");
// console.log(`nombre ${nombre}`);

//Récupération d'un noeud 
// const imgBalise = document.getElementsByTagName("img");
// console.log(imgBalise);

// const baliseP3 = document.querySelector("#partie3");
// console.log(baliseP3);

//Création d'un noeud
// let baliseP = document.createElement("p");
// let textBaliseP = document.createTextNode("Hello World!");
// let textBaliseP2 = document.createTextNode("Bonjour le monde!");

// baliseP.appendChild(textBaliseP);
// baliseP.appendChild(textBaliseP2);
// let baliseP3 = document.querySelector("#partie3");
// baliseP3.appendChild(baliseP);

//autre façon d'écrire
// let baliseP = document.createElement("p");
// baliseP.appendChild(document.createTextNode("Bonjour le monde!"),);
// baliseP.appendChild(document.createTextNode("Hello World!"));
// document.querySelector("#partie3").appendChild(baliseP);

//Deuxieme Methode
// let baliseParaf = document.createElement("p");
// baliseParaf.innerHTML = "Bonjour le monde! Encore !!";
// baliseParaf.innerHTML += "Bonjour le monde! Encore une fois !!";
// document.querySelector("#partie3").appendChild(baliseParaf);

//Placer un noeud
// let baliseP = document.createElement("p");
// baliseP.innerHTML = "Bonjour le monde!";
// document.querySelector("#partie3").insertBefore(baliseP,document.querySelector("#partie3 p"));

// baliseP.innerHTML = "Bonjour le monde! Re";
// document.querySelector("#partie2").insertAdjacentElement("beforebegin", baliseP);

// document.querySelector("#partie2").insertAdjacentElement("afterend", baliseP); 

// //Suppression d'un noeud

// document.querySelector("#partie2").remove()

// let parties = document.querySelectorAll(".partie");

// for(let i = 0; i < parties.length; i++){
//     parties[i].remove();
// }

// OU

// parties.forEach(partie => {
//     partie.remove();
// });

// let partie2 = document.querySelector("#partie2");
// partie2.removeChild(document.querySelector("#partie2 p" ));

//autre façon
// document.querySelector("#partie2 p").remove();

//1)

// let img = document.createElement("img");

// img.src = "./images/logo.png";
// img.style = "width: 100px; height: 100px; border-style: solid;";

// document.querySelector("#footer").insertAdjacentElement("afterend",img);


// //2)

// let form = document.createElement("form");
// let input = document.createElement("input");
// let button = document.createElement("button");
// let label = document.createElement("label");
// let p = document.createElement("p");

// form.appendChild(label);
// form.appendChild(input);
// form.appendChild(button);
// form.appendChild(p);

// form.method = "GET";
// input.name = "Age";
// input.type = "number";
// button.innerHTML = "Valider";
// button.type = "submit";
// button.style = "width: 60px; height: 25px; margin: 10px; border-radius: 5px;";
// label.innerHTML = "Quelle est votre nom ?";

// document.querySelector("#partie2").appendChild(form);

// //3)
// new URLSearchParams(location.search).forEach((value, key) => {
//   p.innerHTML = `${key} : ${value} ans<br>`;
// });

// //4)
// document.querySelector("#logo").remove();

// let newTitre = document.createElement("p");
// newTitre.innerHTML = "Hello World!";
// document.querySelector("#h1").replaceWith(newTitre);

//Modification d'un noeud

let partie1 = document.querySelector("#partie1");
console.log(partie1.attributes);
partie1.title = "Une explication";
partie1.title = "Une autre explication";
// partie1.setAttribute("style", "background-color: yellow");
// partie1.innerHTML ="<h2>Un nouveau titre</h2>"

//Autres façon
partie1.querySelector("h2").textContent = "Encore Un autre titre wow";









