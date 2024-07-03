function convert() {
    let c = window.prompt("Digite uma temperatura em °C (Celsius)")
    let k = Number(c) + 273.15
    let f = Number(c) * 9/5 + 32
    let res = document.getElementsByTagName("p")[0]
    res.innerHTML = `A temperatura de ${c}°C, corresponde a...`
    res.innerHTML += `<p>${k}°K (Kelvin)</p>`
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
}