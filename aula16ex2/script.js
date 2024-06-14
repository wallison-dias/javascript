let txtnum = document.getElementById("inum")
let valores = []
let lista = document.querySelector("select#ilista")
let res = document.querySelector("div#resultado")
// Poderia ser por ID, mas para treinar usei por seletor CSS

function isNum(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = txtnum.valueAsNumber
    // Não pude colocar ele no escopo geral, pois já convertia o input sem eu apertar no botão, assim recebendo 0 sempre
    if (isNum(num) && !inList(num, valores)) {
        valores.push(num)
        let item = document.createElement("option")
        item.text = `O número ${num} foi adicionado`
        lista.appendChild(item)
    } else {
        alert("Digite um número válido e não encontrado na lista")
    }
    txtnum.value = ""
    txtnum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert = "Adicione valores antes de finali"
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let média = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${média}</p>`
    }
}


