let personnage = {
    nom : "Durand",
    prenom : "Toto",

    ditBonjour : function() {
        console.log(`Bonjour ${this.nom} ${this.prenom}`);
    }
}

// personnage.ditBonjour();

// for (let value in personnage) {
//     console.log(personnage[value]);
// }

// console.log(personnage.nom + " " + personnage.prenom);
// console.log(personnage["nom"] + " " + personnage["prenom"]);

// let personnage1 = {...personnage}; // premiere facon de copy

// let personnage2 = {}                    //  deuxieme façon de copy
// Object.assign(personnage2, personnage); //  deuxieme façon de copy

// console.log(personnage2);

console.log(Object.keys(personnage).length);

console.log(Object.values(personnage));

console.log(Object.entries(personnage));

 