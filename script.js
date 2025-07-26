const amount = document.getElementById("amount");
const button = document.getElementById("btn");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const displayFinal = document.getElementById("display");


async function loadData() {
    const data = await fetch("https://api.exchangerate-api.com/v4/latest/USD"
    )
    const newData = await data.json()
    const rates = newData.rates;

    Object.keys(rates).forEach((rate) => {
        const option1 = document.createElement("option")
        const option2 = document.createElement("option")
        option1.value = rate;
        option2.value = rate;

        option1.textContent = rate;
        option2.textContent = rate;

        fromCurrency.appendChild(option1)
        toCurrency.appendChild(option2)
    })

    button.addEventListener("click", () => {
        if (amount.value == '') {
            return alert("Please enter the amount")
        }

        const from = fromCurrency.value;
        const to = toCurrency.value;
        if (from  === to) {
            return alert("Please select the different currencies")
        }

        displayFinal.textContent = amount.value * (rates[to] / rates[from]).toFixed(2)
    })
}


loadData()