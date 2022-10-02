const forma = document.querySelector("#forma");
const inputTxt = document.querySelector("#input-text");
const divLista = document.querySelector("#lista");
let todos = [];
let count = 0;

forma.addEventListener("submit", (event) => {
    event.preventDefault();

    let divItem = document.createElement("div");
    let par = document.createElement("p");
    par.textContent = inputTxt.value;

    let item = { id: count++, text: inputTxt.value };
    todos.push(item);
    console.log(todos);

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", () => {
        divItem.remove()

        let index = todos.findIndex(todo => todo.id == item.id);
        todos.splice(index, 1);

        console.log(todos);
    })

    divLista.append(divItem);
    divItem.append(par, btnDelete);

    inputTxt.value = "";
})