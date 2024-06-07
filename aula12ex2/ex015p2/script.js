function validarForm(event) {
    // Deixa o ano atual como ano máximo no form
    var anoNasc = document.getElementById("ianoNasc")
    var maxAno = new Date().getFullYear()
    anoNasc.setAttribute("max", maxAno)   

    // Valida os requisitos dos inputs
    event.preventDefault();
    var form = document.getElementById("meuForm")

    if (form.checkValidity()) {
        verificar()
    } else {
        form.reportValidity()
    }
}

function verificar() {
    var anoNasc = document.getElementById("ianoNasc")
    var idade = new Date().getFullYear() - anoNasc.value
    var res = document.getElementsByTagName("p")[0]
    var sex = document.getElementsByName("radsex")

    var img = document.createElement("img")
    
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

    img.style.marginTop = "10px"
    res.style.textAlign = "center"
}