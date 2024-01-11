// const addition = (x,y) => x + y;
// const multiplication = (x,y) => x * y;
// const soustraction = (x,y) => x - y;
// const division = (x,y) => x / y;

// const calcul1 = addition(5,3)
// const calcul2 = soustraction(12,10)
// const calcul3 = multiplication(10,11)
// const calcul4 = division(5,3)

// console.log(`Le résultat est :  ${calcul1}`);
// console.log(`Le résultat est :  ${calcul2}`);
// console.log(`Le résultat est :  ${calcul3}`);
// console.log(`Le résultat est :  ${calcul4}`);
//------------------------------------------------------------------------------------------------
function afficherAddition(){
    let valeur1 = document.getElementById('Valeur1').value;
    let valeur2 = document.getElementById('Valeur2').value;

    valeur1 = parseFloat(valeur1, 10);
    valeur2 = parseFloat(valeur2, 10);

    const addition = (x,y) => x + y;
    let calcul = addition(valeur1,valeur2)
    document.getElementById("resultat").value = calcul;
}
function afficherSoustraction(){
    let valeur1 = document.getElementById('Valeur1').value;
    let valeur2 = document.getElementById('Valeur2').value;

    const soustraction = (x,y) => x - y;
    let calcul = soustraction(valeur1,valeur2)
    document.getElementById("resultat").value = calcul;
}
function afficherMultiplication(){
    let valeur1 = document.getElementById('Valeur1').value;
    let valeur2 = document.getElementById('Valeur2').value;

    const multiplication = (x,y) => x * y;
    let calcul = multiplication(valeur1,valeur2)
    document.getElementById("resultat").value = calcul;
}
function afficherDivision(){
    let valeur1 = document.getElementById('Valeur1').value;
    let valeur2 = document.getElementById('Valeur2').value;

    const division = (x,y) => x / y;
    let calcul = division(valeur1,valeur2)
    document.getElementById("resultat").value = calcul;
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  




