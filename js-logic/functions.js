// function showFunction(sucess, error) {
//     if (false) {
//         sucess("Sucesso"); 
//     } else {
//         error("Error");
//     }
// }

// let sucess = (message) => {console.log(message);}
// let error = (message) =>  {console.error(message);}

// showFunction(sucess,error);

//atividade
// //1 - soma de elementos de um array
// let numbers = [10, 20, 40, 30];

// function sumNumbersArrays(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     return sum;
// }

// console.log(sumNumbersArrays(numbers));


//2 - maior numero do array
// let numbers = [89, 47, 190871.9777, 10, 30, 100, 9999999];

// function calculateMaxNumber(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }

//     return max;
// }

// console.log(calculateMaxNumber(numbers));

// //Funçoes de Strings

// let nome = " Paulo Diego "

// console.log(nome.length); //qtd de caracteres
// console.log(nome.charAt(0)); //caractere do indice 0
// console.log(nome.indexOf('D')); //indice do caractere


// console.log(nome.toUpperCase()); //Tudo maiusculo
// console.log(nome.toLowerCase()); //tudo minusculo
// console.log('-'+nome.trim()+'-') //tira todos os espaços em brancos nas laterais

// //funçoes matematicas

// let number = 10.75000;
// console.log(Math.ceil(number)); //arredonda pra cima
// console.log(Math.floor(number)); //arredonda pra baixo
// console.log(Math.round(number)); //arredonda automatico

// console.log(Math.sqrt(10)); //raiz quadrada
// console.log(Math.pow(10, 2)); //potencia
// console.log(Math.cbrt(10)); //raiz cubica
// console.log(Math.abs(number)); //numero absoluto

// console.log(Math.random()); //gera numero aleatorio

//Datas

let date = new Date();

console.log(date.getDate()); // pega o dia
console.log(date.getMonth()+1); // o mês
console.log(date.getFullYear()); // o ano

console.log(date.toString()); // mostra a data como informação
date.setDate((date.getDate() + 365)); //adiciona 365 dias ao dia atual e atualiza a data
console.log(date.toString()); //mostra a nova data










