//6. Zadatak
// dati niz filmova prikazati na stranici na sledeci nacin
//prikaz za jedan film:

let filmovi = [
    {
        naziv: 'film1',
        slika: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        opis: 'opis filma 1',
        ocena: [2]
    },
    {
        naziv: 'film2',
        slika: 'film.jpg',
        opis: 'opis filma  hg hg hgfdgkfhg ghjkfghdfjkgh dfghdfkhg jghfdkhghgdfhgkghdfjgjfdh ghdfghjghhhhhj',
        ocena: [4,32,4]
    },
    {
        naziv: 'film3',
        slika: 'film.jpg',
        opis: 'opis filma 3',
        ocena: [4,3,6]
    },
    {
        naziv: 'film4',
        slika: 'film.jpg',
        opis: 'opis filma 4',
        ocena: [3,2,5]
    }
]
{/* <div class="film">
<img width="90px" src="film.jpg">
<h2 class="naziv">Film1</h2>
<p class="opis">Neki opis konkretnog filma</p>
</div> */}

filmovi.forEach((film,i)=>{
    i++
    let div1 = document.createElement('div');
    div1.classList.add('film');

    let slika = document.createElement('img');
    slika.style.width = "90px"
    slika.src = film.slika;

    let h2 = document.createElement('h2');
    h2.textContent = film.naziv;
    h2.classList.add('naziv');

    let p1 = document.createElement('div');
    p1.classList.add('opis');
    p1.textContent = film.opis;

    p1.addEventListener('mousenter',()=>{
        p1.className = "prosiri";
    })
    p1.addEventListener('mouseout',()=>{
        p1.className = "skupi";
    })

    let oceneDiv = document.createElement('div');
    /*film.ocena.forEach(ocena=>{
        oceneDiv.textContent += ocena + " "
    })*/

    let nizSpan = film.ocena.map(o=>{
        let s = document.createElement('span');
        s.textContent = o;
        return s;
    })

    oceneDiv.append(...nizSpan)
    div1.append(slika, h2, p1,oceneDiv)
    document.body.append(div1)
})

//dodatak: kada kursor misa udje u prostor za opis tekst treba da se prosiri a kada izadje da se skupi
//raditi preko dodavanje event listener-a
// mouseenter , mouseout