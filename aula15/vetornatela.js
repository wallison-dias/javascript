let valores = [3, 5 ,2, 10, 1, 0]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
// }

// Para arrays e objetos é mais simples:
for (let pos in valores) {
    console.log(valores[pos])
}
