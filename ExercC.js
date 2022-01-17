function randomValue(min, max) {
    return Math.random() * (max - min) + min;
}

const array = [randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100), randomValue(1, 100)];

console.log(Math.max(...array));