const prompt = require('prompt-sync')();
//Exercício de prática - Loops (For, While e Do While.)
// //1 - Imprima a sequência de Fibonacci até o 10º termo

// let fibonacci = 10, n1 =0, n2= 1;

// console.log(n1);

// for (let i = 0;i < fibonacci;i++) {
//     console.log(n2);
//     let calculo = n1 + n2;
//     n1 = n2;
//     n2 = calculo;   
// }

// //2 - Verifique se um número é primo
// let primo = prompt("Digite o numero a ser verificado: ");
// let verificador = true;

// if (primo == 1) {
//     console.log("Não é primo.");
// } else {
//     for (let i = 2; i < primo; i++) {
//         if (primo%i === 0) {
//         verificador = false;
//         break;
//     }    
//     }
// }

// if (verificador) {
//     console.log("é primo");
// } else {
//    console.log("não é primo"); 
// }

// // 3 - Imprima um triângulo de números

// let triang = prompt("Digite o numero de linhas que terá o triangulo: ");

// for (let i = 1; i <= triang; i++) {
    
//     let linha = " ";
//     for (let j = 1; j <= i; j++) {
//         linha += j + " " ;
//     }
//     console.log(linha);
// }

// //4 - Calcule o fatorial de um número
// let fat = prompt("Digite o numero a ser calculado o fatorial(n!): ");
// let resultado = 0;
// let init = 1;
// let incremento = 1;

// while (init <=fat) {
    
//     resultado = incremento * init;
//     incremento = resultado;
//     init++;
// }
// console.log("O fatorial de",fat,"! = ", resultado);

// //5 - Inverta os dígitos de um número

// let numero = prompt("Digite o numero a ser invertido: "); //1234 -> 4321
// let i = 0;

// while (numero > 0) {
//     let digito = numero % 10;
//     i = i * 10 + digito;
//     numero = (numero - (numero%10)) / 10;
// }

// console.log(i);

// //6 - Verifique se um número é palíndromo
// let numero = prompt("Digite o numero a ser verificado se é palindromo: ");
// let recebe = numero;
// let i = 0;

// while (numero > 0) {
//     let digito = numero % 10;
//     i = i * 10 + digito;
//     numero = (numero - (numero%10)) / 10;
// }
// numero = recebe;

// console.log(numero);
// console.log(i);

// if (numero == i) {
//     console.log("Sim, é palindromo");
// } else {
//     console.log("Não é palindromo.");
// }

//7 - Conte o número de dígitos de um número
// let numero = prompt("Digite o numero e a quantidade de digitos sera dita: ");
// let i = 0;
// let contador = 0;

// do{
//     let digito = numero % 10;
//     i = i * 10 + digito;
//     numero = (numero - (numero%10)) / 10;
//     contador++
// }while (numero > 0) 

// console.log("A quantidade de digitos do numero informado é: "+contador);
// //8 - Calcule a soma dos dígitos de um número
// let soma = prompt("Digite o numero a ser somado os numeros: ");
// let resultado = 0;

// do{
//     let digito = soma % 10;
//     resultado += digito
//     soma = (soma - (soma%10)) / 10;
// }while (soma > 0)

// console.log("A soma dos digitos é: ", resultado);
//9 - Imprima um padrão de estrela decrescente

//10 - 