let paragrafi = document.querySelectorAll('p');

let projekti = [
    {
        naslov: "Naslov1",
        github: "abc1"
    },
    {
        naslov: "Naslov2",
        github: "abc2" 
    },
    {
        naslov: "Naslov3",
        github: "abc3" 
    },
    {
        naslov: "Naslov4",
        github: "abc4" 
    }
]

paragrafi.forEach((paragraf,i)=>{
    paragraf.textContent = projekti[i].naslov + ' ' + projekti[i].github;
})

for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

// Menjanje elemenata

let div1 = document.querySelector('.wrapper');
div1.innerHTML = '';
div1.innerHTML = `<div class="wrapper">
<p class="klasa">Par1</p>
<P id="srednji">Par2</P>
<P class="klasa">Par3</P>
<button> klik </button>
</div>`

// Mozemo elementima i direktno da dodelimo id i klasu:

div1.id = "prviDiv";
div1.className = "nekaKlasa wrapper";

console.log(div1.classList);
div1.classList.add("novaKlasa");
console.log(div1.classList);
div1.classList.remove("novaKlasa");
console.log(div1.classList);


