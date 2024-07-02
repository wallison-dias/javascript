function convert() {
    let m = window.prompt("Digite uma distância em metros (m)")
    var text = document.getElementsByTagName("p")[0]
    text.innerHTML = `<strong>A distância de ${m} metros, corresponde a</strong>`
    text.innerHTML += `<p>${m/1000} quilômetros (km)</p>`
    text.innerHTML += `<p>${m/100} hectômetros (hm)</p>`
    text.innerHTML += `<p>${m/10} decâmetros (dam)</p>`
    text.innerHTML += `<p>${m*10} decímetros (dm)</p>`
    text.innerHTML += `<p>${m*100} centímetros (cm)</p>`
    text.innerHTML += `<p>${m*1000} milímetros (mm)</p>`
}
