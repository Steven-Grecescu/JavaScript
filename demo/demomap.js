const notes = [5,10,15,20];
notes.pop();
notes.push(17,13);

const notes2 = notes.map(function(note) {
    
    return Math.pow(note, 2);
});

console.log(notes);
console.log(notes2);