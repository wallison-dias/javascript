function validarNum(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function validarList(n, l) {
    if (l.indexOf[n] != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let txtnum = document.getElementById("inum")
    let num = Number(txtnum.value)
    let valores = []
    let options = document.getElementsByTagName("select")[0]
    if (validarNum(num) && validarList(num, valores)) {
        valores.push(num)
        options.innerHTML += `<option>O número ${num} foi adicionado</option>`
    } else {
        alert("Digite um número válido")
    }
    
}

// function finalizar() {
//     let res = document.getElementById("resultado")

// }