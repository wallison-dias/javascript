function check() {
    let prev = window.prompt("Qual era o preço anterior do produto?")
    let now = window.prompt("Qual era o preço atual do produto?")
    let res = document.querySelector("p")
    res.innerHTML = `<strong>Analisando os valores informados</strong>`
    res.innerHTML += `<p>O produto custava ${prev} e agora custa ${now}</p>`
    if (now > prev) {
        let diff = now - prev
        let perc = diff / prev * 100
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${diff}.</p>`
        res.innerHTML += `<p>Uma variação de ${perc}% para cima.</p>`

    } else if (prev > now) {
        let diff = prev - now
        let perc = diff / prev * 100
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço diminuiu ${diff}.</p>`
        res.innerHTML += `<p>Uma variação de ${perc}% para baixo.</p>`

    }
}