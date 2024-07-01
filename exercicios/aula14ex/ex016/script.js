function contar() {
    let txtini = document.getElementById("iini")
    let txtfim = document.getElementById("ifim")
    let txtpas = document.getElementById("ipas")
    let i = Number(txtini.value)
    let f = Number(txtfim.value)
    let p = Number(txtpas.value)
    let res = document.getElementsByTagName("p")[0]

    res.innerHTML = "" // Para esvaziar o parágrafo sempre que clicar no botão
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        alert("[ERRO] Faltam dados!")     
        res.innerHTML = "Impossível contar!"   
    } else {
        if (p <= 0) {
            window.alert("[ERRO] O passo tem que ser um número positivo. Substituímos por 1")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            // Contagem regressiva            
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } 
        res.innerHTML += "\u{1F3C1}"
    }
}