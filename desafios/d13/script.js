function check() {
    let student = window.prompt("Qual é o nome do aluno?")
    let g1 = window.prompt(`Primeira nota de ${student}?`)
    let g2 = window.prompt(`Segunda nota de ${student}?`)
    let average = (Number(g1) + Number(g2)) / 2
    let res = document.querySelector("p")

    res.innerHTML = `<strong>Analisando a situação de ${student}</strong>`
    res.innerHTML += `<p>Com as notas ${g1} e ${g2}, <strong> a média é ${average}</strong></p>`

    if (average < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <strong style = "background-color: pink; color: red;">REPROVADO</strong></p>`
    } else if (average >= 3 && average <= 6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <strong style = "background-color: lightyellow; color: goldenrod;">RECUPERAÇÃO</strong></p>`
    } else {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <strong style = "background-color: lime; color: darkgreen;">APROVADO</strong></p>`
    }
}