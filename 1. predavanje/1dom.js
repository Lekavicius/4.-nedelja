// Document object model

// Selektovanje elemenata (iz HTML-a):

// querySelector, querySelectorAll
// getElementById, getElementsById

// let div1 = document.querySelector(".wrapper");
// console.log(div1);   -- ispisace Par1, Par2 iz HTML-a

// let p = document.querySelector('p');  // Na ovaj nacin cemo obuhvatiti samo prvi paragraf.
// console.log(p); 

// let paragrafi = document.querySelectorAll('p'); // Na ovaj nacin obuhvatamo sve paragrafe. (Node list)
// console.log(paragrafi);

// let p = document.getElementById("srednji");
// console.log(p);

// let paragrafs = document.getElementsByClassName("klasa")
// console.log(paragrafs);   // Dobija se HTML collection

// Ako zelimo da Node list pretvorimo u niz:

// console.log(Array.from(paragrafi));

// Zelimo da svakom paragrafu dodamo text content:

// let niz = ['text1', 'text2', 'text3']

/*paragrafi.forEach((paragraf,i) => {
    paragraf.textContent = niz[i];
}); */

// Kada zelimo iz niza da ubacimo u text content moramo da ukljucimo i indeks.

// div1.textContent = "Hello from JS"
// console.log(div1);          // Ispisace Hello from JS. Na ovaj nacin dodajemo tekst


// Osim text content, za dodavanje teksta postoji Inner HTML. Razlika je sto njime ne dodajemo samo text, vec klasicno HTML.

let p = document.querySelector('p');
p.innerHTML = "<h1>PRVI PARAGRAF</h1>"

// Zgodna stvar kod Inner HTML-a: kad ukucamo prazan string, on brise taj deo.

p.innerHTML = '';