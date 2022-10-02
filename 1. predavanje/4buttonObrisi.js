// Na klik dugmeta obrisati ceo DIV

let btnObrisi = document.querySelector('button');

btnObrisi.addEventListener('click', (event)=>{
    console.log(event);
    console.log('Kliknuli smo na dugme.');
    btnObrisi.parentElement.remove()
})

// Zamena elemenata:

let btnReplace = document.createElement('button');
btnReplace.textContent = "Replace";

// btnObrisi.parentNode.replaceChild(btnReplace,btnObrisi)

btnObrisi.replaceWith(btnReplace);


// FORMA

let forma = document.querySelector('form');
let inputTxt = document.querySelector('input[type=text]');
let inputPass = document.querySelector('#pass')

forma.addEventListener('submit',(event)=>{
    event.preventDefault()            // Ovo iskljucuje defalut ponasanje submita da refresuje stranicu.
    // console.log(inputTxt.value);

    if (inputPass.value.length>4) {
        console.log(inputPass.value);
    }else{
        console.warn('Sifra nema dovoljno karaktera.')
    }

    let izmenjenInput = inputTxt.value.toUpperCase()
    console.log(izmenjenInput);
   // console.log(inputPass.value);
})

let srednjiPar = document.querySelector('#srednji')

srednjiPar.addEventListener('mouseover',()=>{
    // srednjiPar.style.color = 'red';

    srednjiPar.classList.add('crveni');
})