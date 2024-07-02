function buy() {
    let product = window.prompt("Que produto você está comprando?")
    let price = window.prompt(`Quanto custa o(a) ${product} que você está comprando?`)
    let given = window.prompt(`Qual foi o valor que você deu para pagar o(a) ${product}?`)
    let change = given - price
    alert(`Você comprou 1 ${product} que custou R$ ${price}.\nDeu ${given} em dinheiro e vai receber R$ ${change}.\nVolte sempre!`)

}