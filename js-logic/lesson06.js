//Exercício de autenticação sem if ----------------------------------

// let user = "Paulo";
// let pw = "minhasenha";

// let auth = (user === "Paulo") && (pw === "senha");

// console.log(auth);

//Exercício de idade pra concurso -----------------------------------

// let age = "33";
// let age_min = "18";
// let age_max = "32";

// if ((age >= age_min) && (age <= age_max)) {
//     console.log("Pode fazer concurso.");
// } else {
//     console.log("Não pode fazer concurso.");
// }

//IF TERNÁRIO
// <condição> ? <verdadeiro> : <falso>
// let result = ((age >= age_min) && (age <= age_max)) ? console.log("Pode fazer concurso.") : console.log("Não pode fazer concurso.")
    
//Exercícios ---------------------------------------------------------
//Verificar se um numero é par ou impar
// let number = 7

// if (number%2 == 0) {
//     console.log("É par");
// } else {
//     console.log("É ímpar");
// }
//IF TERNÁRIO
// let result = (number%2 == 0) ? console.log("É par"); : console.log("É ímpar");

// Comparar 3 números e dizer qual o maior

// let n1 = 4;
// let n2 = 1;
// let n3 = 2;

// if ((n1 > n2) && (n1 > n3)) {
//     console.log("Número 1 é o maior entre todos");
// } else {
//     if ((n2 > n1) && (n2 > n3)) {
//         console.log("Número 2 é o maior entre todos");
//     } else {
//         if ((n3 > n2) && (n3 > n1)) {
//             console.log("Número 3 é o maior entre todos");
//         } else {
//             if ((n1 == n2) || (n1 == n3) || (n2 == n3)) {
//                 console.log("Erro: há dois números iguais entre os maiores");
//             }
//         }
//     }
// }

// Calculadora simples com adição, subtração, multiplicação e divisão
// const prompt = require('prompt-sync')()
// let n1 = Number(prompt("Digite o primeiro número: "));
// let n2 = Number(prompt("Digite o primeiro número: "));

// console.log("1.Soma 2.Subtração 3.Multiplicação 4.Divisão");

// let calc = prompt("Digite a opção de operação desejada: ");

// if (calc == 1) {
//     console.log("Escolheu soma. Segue resultado do calculo: ",n1 + n2);
// } else if (calc == 2){
//         console.log("Escolheu subtração. Segue resultado do calculo: ",n1 - n2);
//     } else if (calc == 3){
//             console.log("Escolheu multiplicação. Segue resultado do calculo: ",n1 * n2);
//        } else if (calc == 4 && n2 == 0){
//         console.log("ERROR: NÃO É POSSIVEL REALIZAR DIVISÃO POR ZERO.");
//             } else if (calc == 4){
//                 console.log("Escolheu divisão. Segue resultado do calculo: ",n1 / n2);
//                 }

//DIA DA SEMANA PELO NÚMERO
const prompt = require('prompt-sync')()
let day = Number(prompt("Diga o dia da semana em valor de 1 a 7: "));

switch (day) {
    case 1:
        console.log("O", day, "° dia da semana é Domingo");
        break;
    case 2:
            console.log("O", day, "° dia da semana é Segunda");
        break;
    case 3:
            console.log("O", day, "° dia da semana é Terça");
        break;
    case 4:
            console.log("O", day, "° dia da semana é Quarta");
        break;
    case 5:
            console.log("O", day, "° dia da semana é Quinta");
        break;
    case 6:
            console.log("O", day, "° dia da semana é Sexta");
        break;
    case 7:
            console.log("O", day, "° dia da semana é Sábado");
        break;
        default:
        console.log("ERROR: Uma opção de 1 a 7 não foi escolhida.");
        break;
        }















