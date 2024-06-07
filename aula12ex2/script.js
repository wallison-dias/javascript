function carregar() {
    var hora = String(new Date().getHours()).padStart(2, '0')
    window.alert(typeof hora)
    var minuto = new Date().getMinutes().toString().padStart(2, '0')
    var horário = hora + "h" + minuto
    var txthora = document.getElementsByTagName("p")[0]
    txthora.innerHTML = `Agora são ${horário}`
    var imagem = document.getElementById("imagem")

    if (hora >= 0 && hora < 12) {
        imagem.style.background = "url(imagens/manha.jpg) left / cover"
        document.body.style.backgroundColor = "#EE8A32"
    } else if (hora < 18) {
        imagem.style.background = "url(imagens/tarde.jpg) center / cover"
        document.body.style.backgroundColor = "#D48088"
    } else if (hora < 24) {
        imagem.style.background = "url(imagens/noite.jpg) center / cover"
        document.body.style.backgroundColor = "#283A46"
    }
}