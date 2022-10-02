const sectionClass = document.querySelector(".input-container");
const inputCompanyName = document.querySelector("#txt-company-name");
const inputCompanyPib = document.querySelector("#txt-company-pib");
const inputDate = document.querySelector("#txt-time");
const inputValue = document.querySelector("#txt-value");
const submitInsert = document.querySelector("#btn-add");
const sectionItemList = document.querySelector("#item-list");


let fakture = [
    {
        name: "Ime kompanije",
        pib: "12345678",
        dateIssued: "2019-11-18",
        value: 1000,
        currency: "RSD",
        timeStamp: "10:29:21",
        dateStamp: "2019-11-18"
    },
    {
        name: "Ime kompanije",
        pib: "78945612",
        dateIssued: "2019-11-18",
        value: 1500,
        currency: "RSD",
        timeStamp: "10:29:21",
        dateStamp: "2019-11-18"
    }
]

function addToDom(faktura) {
    const divItemContainer = document.createElement("div");
    const divItemInfo = document.createElement("div");

    divItemInfo.innerHTML = `
    <div>
       <label class="company-name">${faktura.name}</label>
       <label class="company-pib">${faktura.pib}</label>
       <label class="time-created">${faktura.dateIssued}</label>
       <label class="price-value">${faktura.value} ${faktura.currency}</label>
        </div>
        <div>
            <label class="insert-timestamp">
                <span>[${faktura.dateStamp}]</span><span>@${faktura.timeStamp}</span>
            </label>
        </div>
    `
    const divItemActions = document.createElement("div");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "DELETE"
    btnDelete.addEventListener("click", () => {
        divItemContainer.remove();

        fakture.splice(fakture.indexOf(faktura), 1)
        console.log(fakture);
    })


    divItemActions.append(btnDelete);
    divItemContainer.append(divItemInfo, divItemActions);
    sectionItemList.append(divItemContainer);

}

fakture.forEach(faktura => {
    addToDom(faktura)
})

function isValid(faktura) {
    return faktura.name != "" && faktura.pib.length == 8;
}

submitInsert.addEventListener("click", () => {
    let time = new Date();
    let faktura = {
        name: inputCompanyName.value,
        pib: inputCompanyPib.value,
        dateIssued: inputDate.value,
        value: Number(inputValue.value),
        currency: "RSD",
        timeStamp: time.toTimeString(),
        dateStamp: time.toDateString()
    }

    if (isValid(faktura)) {
        addToDom(faktura)
        fakture.push(faktura);
        console.log(fakture);
    }
    else{
        alert("Neispravan unos.")
    }


    inputCompanyName.value = "";
    inputCompanyPib.value = "";
    inputDate.value = "";
    inputValue.value = "";
})
