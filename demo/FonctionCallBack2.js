function addition(x,y) {
    return x + y;
}
const calcul = addition(2,3)
console.log(`Le résultat est :  ${calcul}`);

// function calculPar3(x) {
//     return addition(x,3);
// }
// const calcul1 = calculPar3(7);
// console.log(`Le resultat est :  ${calcul1}`);

function multiplications(x,y) {
    return x * y;
}

function calculPar3(x,maFonctionDeRapel) {
    return maFonctionDeRapel(x,3);
}

const calcul2 = calculPar3(2,addition);
console.log(`Le résultat est :  ${calcul2}`);