function multiply(num1, num2, num3, num4){
    return num1 * num2 * num3 * num4;
}

const array = [1, 2, 3, 4];

console.log(multiply(...array));