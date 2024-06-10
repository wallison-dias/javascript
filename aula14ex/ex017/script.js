function gerar () {
    let txtnum = document.getElementById("inum")
    let num = Number(txtnum.value)
    let tab = document.getElementsByTagName("div")[0]

    if (txtnum.value.length == 0) {
        alert("Por favor, digite um número")
    } else {
        tab.innerHTML = ""
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text += `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }    
}