function calc() {
    let a = window.prompt("Qual é o valor de a?")
    let b = window.prompt(`Qual é o valor de b?`)
    let c = window.prompt(`Qual é o valor de c?`)
    let delta = b**2 - 4 * a * c
    let res = document.querySelector("p")
    res.innerHTML = `<strong>Resolvendo Bhaskara</strong>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p><strong><mark>&Delta; = ${delta}</mark></strong></p>`
}