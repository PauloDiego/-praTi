const prompt = require ('prompt-sync')()
// // FOR: <variavel>; <condição>; <incremento>;
// //exemplo de FOR em calculadora de multiplicação.



// let multiplier = Number(prompt("Digite o número que você quer saber a tabuada: "));

// for (let counter = 0 ;counter <= 10; counter++) {
//     console.log(`${multiplier} * ${counter} = `, multiplier * counter);
// }

// //Imprimir os valores pares de 0 a 20.
// for (let i = 0; i <=20; i+=2) {
//     console.log(i);
// }

//calcular a soma dos numeros de 1 a 100
// let soma = 0;
// for (init_number = 1; init_number <= 100;init_number++) {
//         soma += init_number;
// }
// console.log(soma);

//imprimir os valores de 1 a 10 de ordem descrescente
// for (let i = 10;i >=1; i--) {
//         console.log(i);
// }

//WHILE
// while (condição) {
    // console.log("");
// }
// //calcular a soma dos numeros de 1 a 100
// let soma = 0;
// let i = 1;
// while (i <=100) {
//     soma +=i;
//     i++
// }
// console.log(soma);
let numeros = Number(prompt("Digite os numeros a serem feitos a media: "))
let qtd = 0
let soma = 0
console.log("Para encerrar digite 0.");

while (numeros!==0) {
    console.log(numeros);
    let media = soma / qtd
}