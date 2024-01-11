// const promesse = new Promise(function(){
//     console.log("etape 1");
// });
// promesse.then(console.log("etape 2"));

const promesse = new Promise(function(resolve){
    console.log("etape 1");
    resolve("coucou");
    console.log("etape 3");
});

promesse.then(function(valeur){
    console.log("etape 2");
    console.log(valeur);
});