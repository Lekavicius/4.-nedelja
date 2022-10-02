// map, filter

// Kada svaki clan niza treba nekako da transformisemo, onda je pogodno koristiti funkciju Map.

// Napisati funkciju koja mapira niz brojeva u niz korena tih brojeva

const korenBroja = (niz) => niz.map(el => {
    return Math.sqrt(el);
})
console.log(korenBroja([4, 6, 8, 9]));

// kraci zapis:

const koren = (niz) => niz.map(el => Math.sqrt(el));

// Funkcija koja mapira niz stringova u brojeve.

const brojevi = (niz) => niz.map(Number).filter(el=>!isNaN(el))
console.log(brojevi(['5', 'osam', 4, '6']));

// Napraviti funkciju koja vraca filtrirani niz tako da su u njemu samo parni brojevi.

const evenNumbers = (niz) => niz.filter(el => {
    return el % 2 === 0;
})
console.log(evenNumbers([2, 3, 4, 5, 6, 7, 8, 9]));

// kraci zapis:

const parniBrojevi = (niz) => niz.filter(el => el % 2 === 0)