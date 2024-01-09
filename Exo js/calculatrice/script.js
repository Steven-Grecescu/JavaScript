function display(val) {
  document.getElementById("resultat").value += val;
}

function evenementTouche(event) {
  switch (event.key) {
    case "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0" || "/" || "*" || "+" || "-" || ".":
      document.getElementById("resultat").value += event.key;
      break;

    case "=":
      resoudre();
      break;
    case "Backspace":
      effacerUn();
      break;
    case "Delete" || event.key == "c" || event.key == "C":
      effacer();
      break;
    case "²":
      resoudreCarrer();
      break;
  }
}

function effacerUn() {
  let verif = document.getElementById("resultat").value;
  document.getElementById("resultat").value = verif.substring(
    0,
    verif.length - 1
  );
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
function effacer() {
  document.getElementById("resultat").value = "";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
