function ajouterTache() {
  let tacheId = 0;
  const TACHE = document.querySelector("#nouveauToDo").value;
  if (TACHE != "") {
    const SPAN = document.createElement("span");
    const DIV = document.createElement("div");

    SPAN.textContent = TACHE;

    const MODIFIER = document.createElement("button");
    MODIFIER.textContent = "Modifier";
    MODIFIER.classList.add("Modifier");
    MODIFIER.setAttribute("onclick", "modifierTache(" + tacheId + ")");

    const EFFACER = document.createElement("button");
    EFFACER.textContent = "Effacer";
    EFFACER.classList.add("Effacer");
    EFFACER.setAttribute("onclick", "supprimerTache(" + tacheId + ")");

    DIV.appendChild(SPAN);
    DIV.appendChild(MODIFIER);
    DIV.appendChild(EFFACER);
    DIV.classList.add("tache" + tacheId);
    tacheId++;
    document.querySelector("#listeTaches").appendChild(DIV);
  }
}

function modifierTache(id) {
  const TACHE = document.querySelector(".tache" + id).firstChild.textContent;
  let modification = prompt("Modifier la tâche", TACHE);
  document.querySelector(".tache" + id).firstChild.textContent = modification;
}
function supprimerTache(id) {
  document.querySelector(".tache" + id).remove();
}


function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 