function somaVal() {
    let valores = [1, 3, 15, 15, 2]
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    return soma
}

console.log(somaVal())