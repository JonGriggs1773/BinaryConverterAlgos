let binary = "10000001101000111000"
let decimal = "531000"

// console.log(convertBinaryToDecimal(binary))

const convertBinaryToDecimal = num => {
    let decimal = 0;
    let start = 1;
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === "1") {
            decimal += start;
        }
        start *= 2;
    }
    return decimal;
}


console.log(convertBinaryToDecimal(binary))

const convertDecimalToBinary = num => {
    let binaryNum = ""
    let numToReverse = ""
    while(num >= 1) {
        if(num % 2 != 0) {
            numToReverse += "1"
        }
        else {
            numToReverse += "0"
        }
        num = parseInt(num / 2)
    }
    for(let i = numToReverse.length - 1; i >= 0; i--) {
        binaryNum += numToReverse[i]
    }
    return binaryNum
}

// console.log(convertDecimalToBinary(decimal))
