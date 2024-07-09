function check() {
    let year = window.prompt("Qual é o ano que você quer verificar?")
    let res = document.querySelector("p")
    res.innerHTML = `<strong>Analisando o ano de ${year}...</strong>`
    if (year % 4 == 0) {
        res.innerHTML += `<p>O ano de ${year} <strong style = "color: darkgreen; background-color: lime;">É BISSEXTO</strong> &#x2705;</p>`
    } else {
        res.innerHTML += `<p>O ano de ${year} <strong style = "color: darkred; background-color: pink">NÃO É BISSEXTO</strong> &#10060;</p>`        
    }
}