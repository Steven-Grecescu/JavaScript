// function ditBonjour() {
//     console.log("Bonjour");
// }

// ditBonjour();
// -----------------------------------------------------------------------
// let ditBonjour = function(){
//     console.log("Bonjour");
// }
// -----------------------------------------------------------------------
// let ditBonjour = () =>{
//     console.log("Bonjour");
// }
// -----------------------------------------------------------------------
// let ditBonjour = () => console.log("Bonjour");
// ditBonjour();
// -----------------------------------------------------------------------
// let ditBonjour = () => {

//     return "Bonjour";
// }

// console.log(ditBonjour());

// let ditBonjour = () => "Bonjour";
// console.log(ditBonjour());
// -----------------------------------------------------------------------
// let ditBonjour = (x) =>{
//     console.log("Bonjour");
//     console.log(5);
// }
// ditBonjour();
// -----------------------------------------------------------------------
let ditBonjour = (x,y) => {
    console.log("Bonjour");
    console.log(x);
    console.log(y);
} 

ditBonjour(5,10);
// -----------------------------------------------------------------------
let multiplications = (x,y) => x * y;

console.log(multiplications(5,10));