function contar() {
    var txtini = document.getElementById("iini")
    var txtfim = document.getElementById("ifim")
    var txtpas = document.getElementById("ipas")
    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pas = Number(txtpas.value)
    var res = document.getElementsByTagName("p")[0]

    res.innerHTML = "" // Para esvaziar o parágrafo sempre que clicar no botão
    if (pas <= 0) {
        window.alert("[ERRO] O passo tem que ser um número positivo. Substituímos por 1")
        for (ini; ini <= fim; ini += 1) {
            res.innerHTML += `${ini} \u{1F449}`
        }
        res.innerHTML += "\u{1F3C1}"
    } else {
        for (ini; ini <= fim; ini += pas) {
            res.innerHTML += `${ini} \u{1F449}`
        }
        res.innerHTML += "\u{1F3C1}"
    }      
}