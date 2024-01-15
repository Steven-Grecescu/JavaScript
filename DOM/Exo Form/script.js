

let form = document.querySelector("#form");
let newButton = document.createElement("button");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

let p = document.createElement("p");

newButton.textContent = "Valider";
newButton.type = "submit";


form.appendChild(newButton);
form.appendChild(p);

form.setAttribute("method", "GET");

input1.setAttribute("name", "Nom");
input2.setAttribute("name", "prenom");

// new URLSearchParams(location.search).forEach((value, key) => {
//   p.innerHTML = `${key} : ${value} <br>`;
// });



