function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("itxtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e  tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imagens/bebe-m.jpg")
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 60) {
                // Adulto
            } else {
                // Idoso
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 60) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos um ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
}