function gerar () {
    var txtnum = document.getElementById("inum")
    var num = Number(txtnum.value)
    var res = document.getElementsByTagName("div")[0]

    res.innerHTML = ""
    for (var c = 1; c <= 10; c++) {
        var produto = num * c
        res.innerHTML += `<p>${num} x ${c} = ${produto}</p>`
    }
}