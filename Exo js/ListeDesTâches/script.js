function ajouterTacher(){
    let NouvelleTache = window.prompt("Quel est votre tache?");
    if (NouvelleTache === ''){
        window.confirm("Veuillez saisir votre tache");
    }else{
        document.getElementById("UL").innerHTML += "<li>" + NouvelleTache + "</li>";
        document.innerHTML += "<span >" + "Modifier" + "</span>";
        document.innetHTML += "<span>" + "Supprimer" + "</span>";
    }

}

// supprimerTache(){

// }