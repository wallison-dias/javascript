function fatorial(n) {
    let fat = 1
    for (; n > 1; n--) {
        fat *= n
    }
    return fat
}

console.log(fatorial(1))

// 5! = 5 x 4 x 3 x 2 x 1 = 120