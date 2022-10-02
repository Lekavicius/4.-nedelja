const btnP = document.querySelector("#P");
const btnK = document.querySelector("#K");
const btnM = document.querySelector("#M");

const btnReset = document.querySelector("#reset");

let covekRezultat = 0;
let racunarRezultat = 0;


// "K", "P", "M"

let izborCoveka = "";

function izborRacunara() {
    let randomBroj = Math.ceil( Math.random() * 3);
    
    switch (randomBroj) {
        case 1: return "K";
        case 2: return "P";
        case 3: return "M";
    }
}

function pobedioCovek(covek, racunar) {
    if (covek== "K" && racunar == "M") return true;
    if (covek =="M" && racunar=="P") return true;
    if (covek=="P" && racunar == "K") return true;
    return false;
}

function potez(izborCoveka) {
    let racunar = izborRacunara();
    console.log(izborCoveka, racunar);
    if (pobedioCovek(izborCoveka,racunar)) {
        covekRezultat++;
    }
    else{
        if (izborCoveka !==racunar) {
            racunarRezultat++
        }
    }
    let pPotez = document.createElement("p");
    pPotez.textContent = `Covek je izabrao => ${izborCoveka}, racunar je izabrao ${racunar}, trenutni rezultat: ${covekRezultat} - ${racunarRezultat}`;
    document.body.append(pPotez);


    if (covekRezultat == 5 || racunarRezultat == 5) {
        let p = document.createElement("p");
        p.textContent = `Zavrsena igra, rezultat je covek - ${covekRezultat} : ${racunarRezultat} - racunar`;
        document.body.append(p);


        // btnK.disabled = true;
        btnK.remove();
        btnM.remove();
        btnP.remove();
    }

    console.log(`rezultat: ${covekRezultat} : ${racunarRezultat}`);
}

btnK.addEventListener("click", ()=>{
    izborCoveka = "K";
    potez(izborCoveka);
})

btnM.addEventListener("click", ()=>{
    izborCoveka = "M";
    potez(izborCoveka);
})

btnP.addEventListener("click", ()=>{
    izborCoveka = "P";
    potez(izborCoveka);
})

btnReset.addEventListener("click",()=>{
    covekRezultat = 0;
    racunarRezultat = 0;
    document.body.append(btnK,btnM,btnP);
})