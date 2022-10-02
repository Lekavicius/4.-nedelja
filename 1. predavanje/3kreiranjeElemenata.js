// Kreiranje elemenata

let div1 = document.querySelector('.wrapper');
let paragrafi = document.querySelectorAll('p');

let noviParagraf = document.createElement("p");
noviParagraf.textContent = 'Novokreirani paragraf iz js';
let lista = document.createElement('ul');

let item = document.createElement('li');
item.textContent = "item1";
lista.append(item);


div1.appendChild(noviParagraf);
div1.append(noviParagraf, lista);

// Pomocu APPEND mozemo dodati vise elemenata, a pomocu APPENDCHILD samo jedan.



// BRISANJE ELEMENTA

div1.removeChild(lista)

noviParagraf.remove()


// parrent

// let li2 = document.querySelector('#li2');

// li2.parentElement.remove();

console.log(div1.childNodes);  // Nodelist

console.log(div1.children);   // HTML collection



