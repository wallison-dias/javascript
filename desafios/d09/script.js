function readjust() {
    let employee = window.prompt("Qual é o nome do funcionário?")
    let wage = window.prompt(`Qual é o salário de ${employee}?`)
    let percentage = window.prompt(`O salário de ${employee} vai ser reajustado em qual porcentagem?`)
    let readjust = percentage/100 * wage
    let finalwage = Number(wage) + readjust
    let res = document.querySelector("p")
    res.innerHTML = `<strong>${employee} recebeu um aumento salarial!</strong>`
    res.innerHTML += `<p>O salário era R$ ${wage}.</p>`
    res.innerHTML += `<p>Com um aumento de ${percentage}%, o salário vai aumentar R$ ${readjust} no próximo mês..</p>`
    res.innerHTML += `<p>E a partir daí, ${employee} vai passar a ganhar R$ ${finalwage}.</p>`

}