const prompt = require('prompt-sync')();
// //Exercício de prática - Condicional (IF, IF/ELSE e SWITCH)
// //1 - Verificar se um número é positivo, negativo ou zero.
// let number = Number(prompt("Digite o número a ser avaliado: "));

// if (number > 0) {
//     console.log("O número digitado é positivo."); }

// if (number < 0) {
//     console.log("O número digitado é negativo."); }

// if (number === 0) {
//     console.log("O número digitado é ZERO."); }

// //2 - Verificar se um ano é Bissexto
// let year = Number(prompt("Digite um ano para ser verificado: "));

// if ((year % 4 == 0) && ((year % 100 !== 0) || (year % 400 ==0))) {
//         console.log("O ano digitado é bissexto.");
//     } else if (year) {
//             console.log("O ano digitado não é bissexto.");
//         } else {
//                 console.log("ERRO: Digite um ano válido.");
// }

// //3 - Calcule a média de três números e determine o conceito
// // 10 == A
// // 9.9 > B >= 8
// // 7.9 > C >= 6
// // 5.9 > D >= 4
// // 3.9 > E >=  2.1
// // 2 >= F
// let grade1 = Number(prompt("Digite a primeira nota: "));
// let grade2 = Number(prompt("Digite a segunda nota: "));
// let grade3 = Number(prompt("Digite a terceira nota: "));

// let average = (grade1 + grade2 + grade3) / 3 ;

// if ((grade1 > 10) || (grade2 > 10) ||  (grade3 > 10)) {
//     console.log("Não existe nota acima de 10. Favor digitar uma nota válida"); }

// if ((average <= 2)) {
//         console.log("A sua nota final é F!. ");
// } else if ((average <= 3.9) && (average >= 2.1)) {
//         console.log("A sua nota final é E!");
// } else if ((average <= 5.9) && (average >= 4)) {
//         console.log("A sua nota final é D!");
// } else if ((average <= 7.9) && (average >= 6)) {
//         console.log("A sua nota final é C!");
// } else if ((average <= 9.9) && (average >= 8)) {
//         console.log("A sua nota final é B!");
// } else if (average == 10) {
//         console.log("A sua nota final foi A!!!");
// }
// else {
//         console.log("A nota não pode ser texto. Favor digitar uma nota válida.");
// }

// //4 - Verifique se um número é par ou ímpar
// let number = Number(prompt("Digite um número: "));

// if (number%2 == 0) {
//     console.log("O número digitado é PAR.");
// } else {
//     console.log("O número digitado é ÍMPAR.");
// }

//5 - Verifique a categoria de um nadador
// Infantil A: 5 - 7 anos
// Infantil B: 8 - 10 anos
// Juvenil A: 11 - 13 anos
// Juvenil B: 14 - 17 anos
// Adulto: 18 anos ou mais
// let age =Number(prompt("Digite a idade do Nadador: "));

// if (age < 5) {
//         console.log("A criança ainda não está apta ao nado.");
// } else if ((5 <= age) && (age <= 7)) {
//         console.log("A categoria do Nadador é INFANTIL A.");
// } else if ((8 <= age) && (age <= 10)) {
//         console.log("A categoria do Nadador é INFANTIL B.");
// } else if ((11 <= age) && (age <= 13)) {
//         console.log("A categoria do Nadador é JUVENIL A.");
// } else if ((14 <= age) && (age <= 17)) {
//         console.log("A categoria do Nadador é JUVENIL B.");
// } else {
//         console.log("A categoria do Nadador é ADULTO.");
// }

// //6 - Verifique o dia da semana
// let day = Number(prompt("Diga o dia da semana em valor de 1 a 7: "));

// switch (day) {
//     case 1:
//         console.log("O", day, "° dia da semana é Domingo");
//         break;
//     case 2:
//             console.log("O", day, "° dia da semana é Segunda");
//         break;
//     case 3:
//             console.log("O", day, "° dia da semana é Terça");
//         break;
//     case 4:
//             console.log("O", day, "° dia da semana é Quarta");
//         break;
//     case 5:
//             console.log("O", day, "° dia da semana é Quinta");
//         break;
//     case 6:
//             console.log("O", day, "° dia da semana é Sexta");
//         break;
//     case 7:
//             console.log("O", day, "° dia da semana é Sábado");
//         break;
//         default:
//         console.log("ERROR: Uma opção de 1 a 7 não foi escolhida.");
//         break;
//         }

// //7 - Calcule o valor de uma expressão matemática simples
// let number1 = Number(prompt("Digite o primeiro número: "));
// let number2 = Number(prompt("Digite o segundo número: "));
// let operation = prompt("Digite a operação desejada(+, -, * ou /): ");

// switch (operation) {
//     case "+":
//         console.log("Segue resultado da operação de",number1,"+",number2, "=", (number1+number2));
//         break;
//     case "-":
//         console.log("Segue resultado da operação de",number1,"-",number2, "=", (number1-number2));
//         break;
//     case "*":
//         console.log("Segue resultado da operação de",number1,"*",number2, "=", (number1*number2));
//         break;
//     case "/":
//         console.log("Segue resultado da operação de",number1,"/",number2, "=", (number1/number2));
//         break;
//     default:
//         console.log("Favor digitar uma operação válida.");
//         break;
// }

// //8 - Verifique a estação do ano
// let number = Number(prompt("Digite um número de 1 a 4: "));

// switch (number) {
//     case 1:
//         console.log("A",number,"º estação do ano é Primavera.");
//         break;
//     case 2:
//         console.log("A",number,"º estação do ano é Verão.");
//         break;
//     case 3:
//         console.log("A",number,"º estação do ano é Outono.");
//         break;
//     case 4:
//         console.log("A",number,"º estação do ano é Inverno.");
//         break;
//     default:
//         console.log("Favor informar um valor válido.");
//         break;
// }

// //9 - Verifique a faixa etária de uma pessoa
// let age =Number(prompt("Digite a idade a ser verificada: "));

//     if ((0 <= age) && (age <= 12)) {
//         console.log("Segundo a idade informada, é uma CRIANÇA.");
//         } else if ((13 <= age) && (age <= 17)) {
//             console.log("Segundo a idade informada, é um ADOLESCENTE.");
//             } else if ((18 <= age) && (age <= 59)) {
//                 console.log("Segundo a idade informada, é um ADULTO.");
//                 } else if (age >= 60) {
//                     console.log("Segundo a idade informada, é um IDOSO.");
//                     } else{
//                         console.log("Favor digite uma idade válida.");
//                         }

// //10 - Calcule o IMC e determine a categoria
// let weight = Number(prompt("Digite o PESO: "));
// let height = Number(prompt("Digite a ALTURA: "));

// let imc = (weight / (height*height))

// if (imc < 18.5) {
//     console.log("O seu IMC é: ",imc, ". Você está em ABAIXO DO PESO.");
// } else if((18.5<= imc) && (imc<=24.9)){
//         console.log("O seu IMC é: ",imc, ". Você está em PESO NORMAL.");
//     } else if ((25<= imc) && (imc<=29.9)) {
//             console.log("O seu IMC é: ",imc, ". Você está em SOBREPESO.");
//         } else if ((30<= imc) && (imc<=34.9)) {
//                 console.log("O seu IMC é: ",imc, ". Você está em OBESIDADE GRAU I.");
//             } else if ((35<= imc) && (imc<=39.9)) {
//                     console.log("O seu IMC é: ",imc, ". Você está em OBESIDADE GRAU II.");
//                 } else if (imc > 40){
//                         console.log("O seu IMC é: ",imc, ". Você está em OBESIDADE GRAU III.");
//                     } else{
//                             console.log("FAVOR DIGITAR UM VALOR DE PESO E ALTURA VÁLIDOS.");
//                         }