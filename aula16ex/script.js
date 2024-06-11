let números = []
function adicionar() {
    let txtnum = document.getElementById("inum")
    let num = Number(txtnum.value)
    if (num >= 1 && num <= 100){
        if (num == 0) {
            alert("Digite um número")
        } else if (números.indexOf(num) == -1) {
            números.push(num)
            let info = document.getElementsByTagName("div")[0]
            info.innerHTML += `<p>Valor ${num} adicionado.</p>`
        } else {
            alert("Esse número já está na lista, por favor digite outro.")
        }
    } else {
        alert("Digite um número entre 1 e 100")
    }
    let res = document.getElementById("resultado")
    res.innerHTML = ""
}

function finalizar() { 
    números.sort()
    let res = document.getElementById("resultado")
    let quant = números.length
    let maior = números[números.length - 1]
    let menor = números[0]
    let soma = 0
    for (let i = 0; i < quant; i++) {
        soma += números[i]
        res.innerHTML = soma
    }
    let média = soma / quant
    res.innerHTML = `<p>Ao todo, temos ${quant} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
}