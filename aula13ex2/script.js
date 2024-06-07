function verificar() {
    var anoNasc = document.getElementById("ianoNasc")
    var idade = new Date().getFullYear() - anoNasc.value
    var res = document.getElementsByTagName("p")[0]
    var sex = document.getElementsByName("radsex")

    var img = document.createElement("img")
    var maxAno = new Date().getFullYear()
    anoNasc.setAttribute("max", maxAno)   
    
    if (sex[0].checked) {
        var gênero = "homem"
        if (idade >= 0 && idade <= 12) {
            // Criança
            img.setAttribute("src", "imagens/bebe-m.jpg")
        } else if (idade <= 29 ) {
            // Jovem
            img.setAttribute("src", "imagens/jovem-m.jpg")
        } else if (idade <= 60) {
            // Adulto
            img.setAttribute("src", "imagens/adulto-m.jpg")            
        } else {
            // Idoso
            img.setAttribute("src", "imagens/idoso-m.jpg")
        }
    } else {
        var gênero = "mulher"
        if (idade >= 0 && idade <= 12) {
            // Criança
            img.setAttribute("src", "imagens/bebe-f.jpg")
        } else if (idade <= 29 ) {
            // Jovem
            img.setAttribute("src", "imagens/jovem-f.jpg")
        } else if (idade <= 60) {
            // Adulto
            img.setAttribute("src", "imagens/adulto-f.jpg")            
        } else {
            // Idoso
            img.setAttribute("src", "imagens/idoso-f.jpg")
        }
    }

    res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
    res.appendChild(img)

    res.style.textAlign = "center"
}