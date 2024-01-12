class Personne {
    constructor(name, age) {
        this.nom = name;
        this.age = age;
    }
    anniversaire() {
        this.age++;
    }
    afficherPersonne() {
        return `Nom : ${this.nom} - Age : ${this.age} - Pseudo : ${this.pseudo}`;
    }
}

class Guerrier extends Personne {
    constructor(name, age,pseudo) {
        super(name, age);
        this.pseudo = pseudo;
        this.force = 3;
        this.intel = 1;
        super.anniversaire();
    }

    afficherPersonne() {
        let afficher = super.afficherPersonne();
        afficher += `\n - Pseudo : ${this.pseudo}\n`;
        afficher += ` - Force : ${this.force}\n`;
        afficher += ` - Intel : ${this.intel}`;
        return afficher;
    }

}
let personne1 = new Guerrier("Toto", 18,"Wawa");
let personne2 = new Personne("Titi", 19);

personne1.anniversaire();
console.log(personne1.afficherPersonne());