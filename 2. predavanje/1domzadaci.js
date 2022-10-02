// 1. Zadatak:
// napraviti strukturu kao iz html fajla ali sve preko js-a
/* <div class="wrapper">
        <div class="section">
            <p>Paragraf</p>
        </div>
        <div class="section main">
            <ul>
                <li id='1'>1</li>
                <li id='2'>2</li>
                <li id='3'>3</li>
            </ul>
            <button id="btnKlik">KLIK</button>
        </div>
    </div> */

let divWrapper = document.createElement('div');
let divSection = document.createElement('div');
let divSectionMain = document.createElement('div');
let paragraf = document.createElement('p');
let lista = document.createElement('ul');
let buttonKlik = document.createElement('button');

divWrapper.classList.add('wrapper');
divSection.classList.add('section');
divSectionMain.classList.add('section', 'main');
buttonKlik.id = "btnKlik"

paragraf.textContent = "Paragraf";
buttonKlik.textContent = "KLIK";
for (let i = 1; i <= 3; i++) {
    let item = document.createElement('li');
    item.textContent = i;
    lista.append(item)
}
                
document.body.append(divWrapper);
divWrapper.append(divSection, divSectionMain);
divSection.append(paragraf);
divSectionMain.append(lista, buttonKlik);


//2. Zadatak:
// Umesto paragrafa u prvom divu sa klasom section
// dodati 20 paragrafa koji sadrze svoj redni broj kao tekst
// (paragraf koji je bio pre toga tu treba da se obrise)

paragraf.remove();
for (let i = 1; i <= 20; i++) {
    let par2 = document.createElement('p');
    par2.textContent = i;
    divSection.append(par2);
}

//3. Zadatak:
// U prvi div sa klasom section dodati jos 20 paragrafa koji u sebi sadrze dugme sa tekstom `obrisi me ${i}` gde je i redni broj dugmeta  
//Na klik na svako dugme `obrisi me i` treba da se obrise sa stranice dugme na koje je kliknuto

for (let i = 21; i <= 40; i++) {
    let par3 = document.createElement('p');
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = `Obrisi me ${i}`;
    par3.append(buttonDelete);
    divSection.append(par3);

    buttonDelete.addEventListener('click', (event)=>{
        //event.target.remove()
        buttonDelete.remove();
    })
}

//4. Zadatak:
// Za dugme sa id = btnKlik dodati osluskivac dogadjaja klik koji na klik tog dugmeta brise wrapper div element

buttonKlik.addEventListener('click', ()=>{
    divWrapper.remove();
})


//5. za sledeci html:

{/* <div class = "box">
<ul class = 'lista2'>
    <li> prvi </li>
    <li> drugi </li>
    <li> treci</li>
</ul>
</div> */}

//selektovati sve li elemente (kao listu ili niz)

let items = document.querySelectorAll("ul.lista2 li")
console.log(items);


// za svaki li element koji je na poziciji deljivoj sa 3 dodati klasu "styledLi3" i "styledLi" a za sve ostale samo klasu "styledLi"

items.forEach((item,i)=>{
    if (i%3===0) {
        item.classList.add("styledLi3")
    }
    item.classList.add("styledLi")
})
/*
for (let i = 0; i < items.length; i++) {
    if (i%3===0) {
        items[i].classList.add("styledLi3", "styledLi")
    }
    else{
        items[i].classList.add("styledLi")
    }
}*/