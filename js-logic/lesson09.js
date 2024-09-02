let elements = [2 , 4, 3, 1, 6, 4, 10];
// let soma = 0;

// for (let init = 0; init < elements.length; init++) {
//     soma +=elements[init];
// }
// console.log(`A soma dos valores do array da igual a: ${soma}`);

// let maiorNum = elements[0];
// for (let init = 0; init < elements.length; init++) {
    
//     if (elements[init] > maiorNum) {
//         maiorNum = elements[init];
//     }
// }
// console.log(maiorNum);
// let revert = []
// for (let init = elements.length-1; init >= 0; init--) {
//     console.log(elements[init]);
//     revert.push(elements[init])
// }
// console.log(revert);

let pares = []

for (let i = 0; i < elements.length; i++) {
    if (elements[i]%2===0) {
        pares.push(elements[i])
    }
}
console.log(pares);