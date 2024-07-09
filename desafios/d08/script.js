function discount() {
    let product = window.prompt("Qual é o produto que você está comprando?")
    let price = window.prompt(`Qual o preço do(a) ${product}?`)
    let discount = 0.1 * price
    let finalprice = price - discount
    let res = document.querySelector("p")
    res.innerHTML = `<strong>Calculando desconto de 10% para ${product}</strong>`
    res.innerHTML += `<p>O preço original era ${price}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${discount} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${finalprice} no(a) ${product}.</p>`

}