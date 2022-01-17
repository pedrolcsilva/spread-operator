function concatenation(...vet1){
   return vet1;
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

console.log(concatenation(...array1, ...array2));