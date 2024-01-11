const calculPar3 = (x, maFonctionDeCalcul) => maFonctionDeCalcul(x,3);
const addition = (x,y) => x + y;
const multiplications = (x,y) => x * y;

const calcul1 = calculPar3(7,addition);
const calcul2 = calculPar3(2,multiplications);

console.log(`Le résultat est :  ${calcul1}`);
console.log(`Le résultat est :  ${calcul2}`);