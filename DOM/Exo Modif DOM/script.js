
// let partie1 = document.querySelector("#partie1");
// let partie2 = document.querySelector("#partie2");
// let partie3 = document.querySelector("#partie3");

// partie1.querySelector("h2").style.color = "green";
// partie2.querySelector("h2").style.color = "green";
// partie3.querySelector("h2").style.color = "green";

// partie1.querySelector("h2").style.border = "3px solid black";
// partie2.querySelector("h2").style.border = "3px solid black";
// partie3.querySelector("h2").style.border = "3px solid black";

// partie1.querySelector("h2").style.borderRadius = "10px";
// partie2.querySelector("h2").style.borderRadius = "10px";
// partie3.querySelector("h2").style.borderRadius = "10px";

// partie1.querySelector("p").style.color = "blue";
// partie2.querySelector("p").style.color = "blue";
// partie3.querySelector("p").style.color = "blue";

//autre façon

let parties = document.getElementsByClassName("partie");

for(let i = 0; i < parties.length; i++){
    parties[i].querySelector("p").style.color = "blue";
    parties[i].querySelector("h2").style.color = "green";
    parties[i].querySelector("h2").style.border = "3px solid black";
    parties[i].querySelector("h2").style.borderRadius = "10px";

}