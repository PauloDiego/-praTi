// function criarMouse(n, m, t) {
//         return {
//         nome: n,
//         marca: m,
//         tipo: t
//         }
// }


// let mouse1 = criarMouse("comum", "Multilaser", "escritorio");
// let mouse2 = criarMouse("LightSpeed PRO","Logitech", "Gamer");

// console.log(mouse1);
// console.log(mouse2);

let livro = {
    nome: "Sherlock Holmes",
    escritor: "Árthur Conan Doyle",
    anoLancamento: 1887,
    genero: ["Ficção", "Fantasia", "Suspense"],

    mostrarDados: function () {
        return `
    Dados do livro:
    Nome: ${this.nome}    
    Escritor: ${this.escritor}
    Ano de lançamento: ${this.anoLancamento}
    Genero: ${this.genero}
        `
    }
}

console.log(livro.mostrarDados());


let carro = {
    nome: "Corsa",
    montadora: "Chevrolet",
    velMax: 240,
    ano: 2010,

    acelerar: function () {
        return "Acelerando..."
    },

    mostrarDadosCarro: function () {
        return `
    Dados do carro:
    Nome: ${this.nome}    
    Montadora: ${this.montadora}
    Ano: ${this.ano}
    Velocidade Maxima: ${this.velMax} Km/H
        `
    }
}

console.log(carro.mostrarDadosCarro());
console.log(carro.acelerar());
