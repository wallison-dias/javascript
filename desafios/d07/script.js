function askDolar() {
    var exchangeRateTEST = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")
    var exchangeRate = Number(exchangeRateTEST)
    return Number(exchangeRate)
}

function convert(exchangeRate) {
    let r = window.prompt("Quantos R$ você tem?")
    let us = Number(r) * Number(exchangeRate)
    let res = document.querySelector("p")
    res.innerHTML = `Você tem US$${us}`
    // window.alert(typeof Number(r))
    // window.alert(typeof Number(exchangeRate))
    // window.alert(typeof us)
}