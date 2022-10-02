// FIND

let nizObj = [{ name: 'Pera', age: 53 }, { name: 'Mika', age: 43 }, { name: 'Laza', age: 13 }]

console.log(nizObj.find(el => el.age == 43)); // Vraca prvog koji zadovoljava uslov

// FindIndex
console.log(nizObj.findIndex(el => el.age == 43)); // Vraca indeks prvog koji zadovoljava uslov

// SOME

console.log(nizObj.some(el => el.age == 43)); // Proverava da li neki ispunjava uslov. Vraca true ako postoji, false ako ne postoji.

// EVERY

console.log(nizObj.every(el => el.age == 43)); // True ako svaki element zadovoljava uslov.

// FLAT, FlatMap

let niz = [[2, 3, 5], [2, 5, 5, 8, 5], [1, 2, 4]];

console.log(niz.flat());  // Stavlja ih sve u jedan niz.

// SPLIT, JOIN

let str = "Hello World!"
console.log(str.split('').join('-'));

console.log('3463473473'.split('').map(Number).map(el=>el-1).join(''));

console.log(Number('3463473473'.split('').reverse().join('')));

// POP, SHIFT

console.log([2,3,5].pop()); // Vraca poslednji element niza

let x = [2,3,5];
x.pop()
console.log(x); // Vraca niz [2,3], jer smo poslednji element izbacili.

console.log([2,3,5].shift()); // Vraca prvi element niza