function carregar() {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var corpo = document.body
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        imagem.style.background = "url(imagens/manha.jpg) no-repeat left / cover"
        document.body.style.background = "#FDB75B"
    } else if (hora < 18) {
        imagem.style.background = "url(imagens/tarde.jpg) no-repeat center / cover"
        document.body.style.background = "#8C6AA3"
    } else {
        imagem.style.background = "url(imagens/noite.jpg) no-repeat center / cover"
        document.body.style.background = "#1D2C41"       
    }
}