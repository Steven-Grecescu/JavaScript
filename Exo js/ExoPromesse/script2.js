async function Timer() {
    document.getElementById("calc").value = "10 * 5";
    document.getElementById("resultat").value = "5";
    await sleep(1);
    document.getElementById("resultat").value = "4";
    await sleep(1);
    document.getElementById("resultat").value = "3";
    await sleep(1);
    document.getElementById("resultat").value = "2";
    await sleep(1);
    document.getElementById("resultat").value = "1";
    await sleep(1);
    document.getElementById("resultat").value = "La réponse était 50";
}

async function sleep(secondes) {
    return new Promise(resolve => setTimeout(resolve, secondes * 1000));
}
