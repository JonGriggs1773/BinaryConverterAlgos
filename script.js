let binary = "1011011101111"

const convertBinaryToDecimal = (num) => {
    let doubles = []
    let decimal = 0
    let start = 1
    for (let i = num.length - 1; i >= 0; i--) {
        console.log(i, start, doubles)
        if (num[i] == "1") {
            doubles.push(start)
            start *= 2
        } else {
            start *= 2
        }
    }
    for (let j = 0; j < doubles.length; j++) {
        decimal += doubles[j]
    }
    return decimal
}

console.log(convertBinaryToDecimal(binary))
