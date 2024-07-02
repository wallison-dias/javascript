function calc() {
    let numString = window.prompt("Digite um número inteiro qualquer")
    let num = Number(numString)
    let ant = num-1
    let suc = num+1
    window.alert(`Antes do ${num}, temos o número ${ant}. \n Depois do ${num}, temos o número ${suc}.`)
}