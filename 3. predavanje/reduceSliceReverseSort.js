// reduce

// Napisati funkciju koja racuna prosek niza brojeva.

const prosekReduce = (niz) => niz.reduce((total,el)=>{
    return total+el
},0) / niz.length
console.log(prosekReduce([2,4,6]));

// Funkcija koja racuna prosek samo pozitivnih brojeva

const prosekPozitivnih = (niz) => niz.filter(el=>el>0).reduce((total,el)=>(total+el),0) / niz.filter(el=>el>0).length;

console.log(prosekPozitivnih([-3, -4 , 5, 9]));

const prosekPozitivnih1 = (niz) =>{
    let filtriraniNiz = niz.filter(el=>el>0);
    return filtriraniNiz.reduce((total,el)=>(total+el),0) / filtriraniNiz.length;
}
console.log(prosekPozitivnih1([-3, -5 , 0 , 3 , 5]));

// const prosekPozitivnih2 = prosekReduce(niz.filter(el=>el>0))

console.log('--------------------');

// MAPIRANJE SA NIZOVIMA OBJEKATA

let nizObj = [{name: 'Pera', age: 53}, {name: 'Mika', age: 43}, {name: 'Laza', age: 13}]

// Hocemo da izvucemo samo niz imena: Pera, Mika, Laza

console.log(nizObj.map(obj=>obj.name + ', ' + obj.age));


// Napraviti funkciju koja vraca prvih N elemenata niza.

function firstN(arr,N) {
    let tmp = [];
    for (let i = 0; i < N && i<arr.length; i++) {
        tmp.push(arr[i])     
    }
    return tmp;    
}
console.log(firstN([1,4,2,3],7));

// Napraviti funkciju koja vraca poslednjih N elemenata niza.

function lastN(arr,N) {
    let tmp = [];
    if (N>arr.length) return arr;
    for (let i = arr.length-N ; i < arr.length; i++) {
       tmp.push(arr[i])
    }
    return tmp;
}
console.log(lastN([1,4,2,3],8));

// Uraditi isto ovo, ali sa SLICE.

const first = (niz, n) => niz.slice(0, n);
const last = (niz,n) => niz.slice(niz.length-n, niz.length);

// REVERSE
// Reverse se razlikuje po tome sto on menja i pocetni niz.

let niz = [1,4,5,3,5];
console.log(niz.reverse());
console.log(niz);

const lastReverse = (niz,n) => niz.slice(-n).reverse();
console.log(lastReverse([4,5,6,2,4,6],3));

// SORT (takodje menja pocetni niz)

let x = [345,2,565,2,1,4,14,553,24,53];
console.log(x.sort());   // Sortira po ASCII vrednostima

let y = ['A', 'a', 'Pera', 'pera', 'Mika'];
console.log(y.sort());

// Kada zelimo da sortiramo normalno, od najmanjeg ka najvecem broju:

x.sort((a,b)=>a-b)
console.log(x);

let nizObj1 = [{name: 'Pera', age: 53}, {name: 'Mika', age: 43}, {name: 'Laza', age: 13}]
nizObj1.sort((a,b)=>a.age-b.age);
console.log(nizObj1);