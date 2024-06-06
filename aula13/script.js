function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("itxtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1800) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "homem"
            document.body.style.backgroundColor = "blue"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imagens/bebe-m.jpg")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "imagens/jovem-m.jpg")
            } else if (idade < 60) {
                // Adulto
                img.setAttribute("src", "imagens/adulto-m.jpg")                
            } else {
                // Idoso
                img.setAttribute("src", "imagens/idoso-m.jpg")
            }
        } else if (fsex[1].checked) {
            gênero = "mulher"
            document.body.style.backgroundColor = "deeppink"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imagens/bebe-f.jpg")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "imagens/jovem-f.jpg")
            } else if (idade < 60) {
                // Adulto
                img.setAttribute("src", "imagens/adulto-f.jpg")                
            } else {
                // Idoso
                img.setAttribute("src", "imagens/idoso-f.jpg")
            }
        }
        // É o mesmo que personalizar no CSS:
        res.style.textAlign = "center"
        img.style.borderRadius = "50%"       

        res.innerHTML = `<p>Detectamos ${gênero} de ${idade} anos</p>`
        res.appendChild(img)
    }
}