const btnGuess = document.querySelector("#btn-guess");
const inputUser = document.querySelector("#input-user");
const pMessage = document.querySelector("#message");

let result = 0;
let random = Math.ceil(Math.random() * 100);

btnGuess.addEventListener("click", () => {
     console.log(random);
     result++;
     if (Number(inputUser.value) > 100 || Number(inputUser.value) < 1) {
         return pMessage.textContent = "Uneti broj mora biti u rasponu od 1 do 100."
     }
     if (Number(inputUser.value) == random) {
         pMessage.textContent = `Pogodili ste broj. Broj pokusaja je ${result}.`;
     }
     else if (Number(inputUser.value) > random) {
         pMessage.textContent = "Uneti broj je veci od trazenog.";
     }
     else {
         pMessage.textContent = "Uneti broj je manji od trazenog.";
     }
     inputUser.value = "";
 })