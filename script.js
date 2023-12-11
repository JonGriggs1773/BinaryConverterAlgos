let binary = "1011010001011111110101110100010001000111111"


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
