let num = [3, 5, 1]
num[3] = 7
num.push(9)
console.log(num)
console.log(num.length)
console.log(num.sort())
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5) 
// Retorna -1 se o valor não existir
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor 5 está na posição ${pos}`) 
}