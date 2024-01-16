//Attributs HTML
// function clicSurImage(){
//     let baliseImg = document.querySelector("img");
//     // baliseImg.classList.add("border");
//     baliseImg.classList.toggle("border");
// }

// function changementValeur(){
//     console.log("changement de valeur");
// }

// function selection(){
//     console.log("selection de l'élément");
// }

// function finFocus(){
//     console.log("fin du focus");
// }

//Fonction AddEventListener

// let titreH1 = document.querySelector("h1");

// titreH1.addEventListener("click", function(){      
//     console.log("clic sur le titre");
// });

// //Autres ecriture avec la fleche 

// // titreH1.addEventListener("click", ()=>{
// //     console.log("clic sur le titre");
// // });

// document.addEventListener("click", function(){      
//     console.log("Clique partout");
// });

// document.addEventListener("click", function(event){
//     console.log(event);
// });     

// document.addEventListener("click", function(event){
//     console.log(event.target);
// });   

let inputNom = document.querySelector("input[name='nom']");
console.log(inputNom);

inputNom.addEventListener("focus", function(){
    inputNom.style.backgroundColor = "green";
});

inputNom.addEventListener("blur", function(){
    inputNom.style.backgroundColor = "gray";
});

inputNom.addEventListener("focus", function(){
    console.log("changement de valeur")
});