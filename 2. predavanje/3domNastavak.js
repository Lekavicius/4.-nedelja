//dodavanje elemenata iz forme na stranicu i u niz
{/* <div class="podaci">

</div>
<form id="forma">
    <input type="text" id="ime"><br>
    <input type="password" id="sifra"><br>
    <input type="submit" value="Potvrdi">
</form>
<script src="domNastavak.js"></script> */}

const forma = document.querySelector("#forma");
const inputTxt = document.querySelector("#ime")
const inputPass = document.querySelector("#sifra");
const divPodaci = document.querySelector('.podaci');

let korisnici = [];

forma.addEventListener('submit',(event)=>{
    event.preventDefault();

    let p = document.createElement('p');
    p.innerHTML = inputTxt.value + "<br>" + inputPass.value;
    divPodaci.append(p);

    let korisnik = {ime: inputTxt.value, sifra: inputPass.value};
    korisnici.push(korisnik);
    console.log(korisnici);

    inputTxt.value = '';  // Ovako se prazni input polje.
    inputPass.value = '';
})

//ako je dugme i inputi van forme

const btnPotvrdi = document.querySelector('#potvrdi');

btnPotvrdi.addEventListener('click',()=>{
  // i ovde sve isto bez preventDefault
})
