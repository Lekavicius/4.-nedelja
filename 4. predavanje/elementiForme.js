const inputDate = document.querySelector("#input-date");
const select = document.querySelector("#select");
const btnKlik = document.querySelector("#btnKlik");

btnKlik.addEventListener("click",()=>{
    console.log(inputDate.value);
    console.log(select.value);
    inputDate.value = "";
})

// na 39:00 do kraja krece probni test