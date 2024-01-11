const notes = [5,10,15,20 ];
const index = notes.findIndex(function(note) {
    return note === 15;
});
console.log(index);

const notes2 = [5,10,15,20 ];
const valeur = notes2.find(function(note) {
    return note === 15;
});
console.log(valeur);

const persos = [
    ["riri",5,10,15],
    ["fifi",10,12,14],
    ["lulu",6,8,10],
]
const valeur2 = persos.find(function(p) {
    return p[0] === "lulu";
});
console.log(valeur2);