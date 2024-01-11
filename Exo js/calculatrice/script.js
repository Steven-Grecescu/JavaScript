function display(val) {
  document.getElementById("resultat").value += val;
}

function evenementTouche(event) {
  const TOUCHES_AUTORISEES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0","/", "*", "+", "-", "." ];

  if (TOUCHES_AUTORISEES.includes(event.key)) {
    document.getElementById("resultat").value += event.key;
  } else {
    switch (event.key) {
      case "=":
        resoudre();
        break;
      case "Backspace":
        effacerUn();
        break;
      case "Delete":
        effacer();
        break;
      case "²":
        resoudreCarrer();
        break;
      default:
        break;
    }
  }
}
function effacerUn() {
  let verif = document.getElementById("resultat").value;
  document.getElementById("resultat").value = verif.substring(0,verif.length - 1);
}

function resoudre() {
  let x = document.getElementById("resultat").value;
  let y = math.evaluate(x);
  document.getElementById("resultat").value = y;
}

function resoudreRacineCarrer() {
  let x = document.getElementById("resultat").value;
  let y = math.sqrt(x);
  document.getElementById("resultat").value = y;
}

function resoudreCarrer() {
  let x = document.getElementById("resultat").value;
  let y = x * x;
  document.getElementById("resultat").value = y;
}

function resoudreInverse() {
  let x = document.getElementById("resultat").value;
  let y = 1 / x;
  document.getElementById("resultat").value = y;
}

function resoudreLn(){
  let x = document.getElementById("resultat").value;
  let y = Math.log(x);
  document.getElementById("resultat").value = y;
}

function resoudreLog(){
  let x = document.getElementById("resultat").value;
  let y = math.log10(x);
  document.getElementById("resultat").value = y;
}

function resoudreSin(){
  let x = document.getElementById("resultat").value;
  let y = math.sin(x);
  document.getElementById("resultat").value = y;
}

function effacer() {
  document.getElementById("resultat").value = "";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
