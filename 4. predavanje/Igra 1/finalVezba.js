const divContainer = document.querySelector("#container");
const btnPapir = document.querySelector("#P");
const btnKamen = document.querySelector("#K");
const btnMakaze = document.querySelector("#M");
const btnReset = document.querySelector("#reset");
const divRezultat = document.querySelector("#rezultati");
const parTrenutniRezultat = document.querySelector("#trenutniRezultat");

let covekRezultat = 0;
let racunarRezultat = 0;

let izborCoveka = "";

function izborRacunara() {
    let randomBroj = Math.ceil(Math.random() * 3);

    switch (randomBroj) {
        case 1: return "Papir"
        case 2: return "Kamen"
        case 3: return "Makaze"
    }
}

function pobedaCoveka(covek, racunar) {
    if (covek == "Papir" && racunar == "Kamen") return true;
    if (covek == "Kamen" && racunar == "Makaze") return true;
    if (covek == "Makaze" && racunar == "Papir") return true;

    return false;
}

function potez(izborCoveka) {
    let racunar = izborRacunara();

    if (pobedaCoveka(izborCoveka, racunar)) {
        covekRezultat++;
    }
    else if (izborCoveka != racunar) {
        racunarRezultat++
    }
    parTrenutniRezultat.innerHTML += `Covek je izabrao ${izborCoveka}, racunar je izabrao ${racunar}. Trenutni rezultat je ${covekRezultat} : ${racunarRezultat}. <br> <br>`


    if (covekRezultat == 5 || racunarRezultat == 5) {
        parTrenutniRezultat.innerHTML += `Igra je zavrsena. Konacan rezultat je covek: ${covekRezultat} - racunar: ${racunarRezultat}.`
        divContainer.remove();
    }
}

btnPapir.addEventListener("click", () => {
    izborCoveka = "Papir";
    potez(izborCoveka);
})

btnKamen.addEventListener("click", () => {
    izborCoveka = "Kamen";
    potez(izborCoveka);
})

btnMakaze.addEventListener("click", () => {
    izborCoveka = "Makaze";
    potez(izborCoveka);
})

btnReset.addEventListener("click", ()=>{
    covekRezultat = 0;
    racunarRezultat = 0;
    divRezultat.innerHTML = "";
    document.body.append(divContainer, btnPapir, btnKamen, btnMakaze);
})