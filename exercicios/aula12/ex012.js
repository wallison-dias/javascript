var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var horamin = `${hora}:${min}`

console.log(`Agora são exatamente ${horamin} h`)
if (hora > 0 && hora < 6) {
    console.log("Boa madrugada")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}