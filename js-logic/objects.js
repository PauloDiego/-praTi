const prompt = require('prompt-sync')()

// // function criarMouse(n, m, t) {
// //         return {
// //         nome: n,
// //         marca: m,
// //         tipo: t
// //         }
// // }


// // let mouse1 = criarMouse("comum", "Multilaser", "escritorio");
// // let mouse2 = criarMouse("LightSpeed PRO","Logitech", "Gamer");

// // console.log(mouse1);
// // console.log(mouse2);

// let livro = {
//     nome: "Sherlock Holmes",
//     escritor: "Árthur Conan Doyle",
//     anoLancamento: 1887,
//     genero: ["Ficção", "Fantasia", "Suspense"],

//     mostrarDados: function () {
//         return `
//     Dados do livro:
//     Nome: ${this.nome}    
//     Escritor: ${this.escritor}
//     Ano de lançamento: ${this.anoLancamento}
//     Genero: ${this.genero}
//         `
//     }
// }

// console.log(livro.mostrarDados());


// let carro = {
//     nome: "Corsa",
//     montadora: "Chevrolet",
//     velMax: 240,
//     ano: 2010,

//     acelerar: function () {
//         return "Acelerando..."
//     },

//     mostrarDadosCarro: function () {
//         return `
//     Dados do carro:
//     Nome: ${this.nome}    
//     Montadora: ${this.montadora}
//     Ano: ${this.ano}
//     Velocidade Maxima: ${this.velMax} Km/H
//         `
//     }
// }

// console.log(carro.mostrarDadosCarro());
// console.log(carro.acelerar());

// function gatos(raça, pelagem, idade, docil) {
//     this.raça = raça;
//     this.pelo = pelagem;
//     this.idade = idade;
//     this.docil = docil;

//     this.mostrarDadosGato  = function () {
//         return `
//         Dados do gato
//         Raça do gato: ${this.raça}
//         Pelo do gato: ${this.pelo}
//         idade do gato: ${this.idade}
//         Ele é dócil? ${this.docil}
//         `
//     }
// }

// let gato1 = new gatos("Vira-lata","Tigrado",1,true);
// let gato2 = new gatos("VAI FLEXIONANDO A XOTA","Malhado",3,true);


// // console.log(gato1.mostrarDadosGato());
// // console.log(gato2.mostrarDadosGato());


// for (let key in gatos) {
//     console.log(key +":"+ gatos[key]);  
// }

//exercicio de pratica

// let professor = {
//     notaAlunos: {1:10, 2:9.8, 3:7.1, 4:8, 5:5.5, 6:4.3, 7:9, 8:10, 9:10, 10:9, 11:10, 12:3.9},
//     mediaNotas: function () {
//         let sum = 0;
//         let key;
//         // for (const key in this.notaAlunos) {
//         //     sum = sum + this.notaAlunos[key];
//         // }
//         for (key in professor.notaAlunos) {
//             sum = sum + this.notaAlunos[key];
//         }

//         return sum/key
//     }
// }

// if (professor.mediaNotas() > 6) {
//     console.log("Aprovado.");
//     console.log("o professor passou a turma com media: "+professor.mediaNotas());
// } else {
//     console.log("Reprovado.");   
//     console.log("o professor não passou a turma com media: "+professor.mediaNotas()); 
// }

// let biblioteca = [
//     {
//         titulo: "O Hobbit",
//         editora: "HarperCollins",
//         anoLanc: 2019,
//         numberPages: 336,
//     },
//     {
//         titulo: "O guia do mochileiro das galáxias",
//         editora: "Editora Arqueiro",
//         anoLanc: 2010,
//         numberPages: 241,
//     },
//     {
//         titulo: "O Príncipe",
//         editora: "Edipro",
//         anoLanc: 2018,
//         numberPages: 96,
//     },
//     {
//         titulo: "Programador Pragmático",
//         editora: "Bookman",
//         anoLanc: 2010,
//         numberPages: 344,
//     },
// ];

// biblioteca.forEach(item => {
//     if(item.anoLanc < 2010){
//         console.log(`Titulo: ${item.titulo}
//          Ano de lançamento: ${item.anoLanc} 
//     `);
//     }
// });


// //anoLanc > 2010 ? mostra : n mostra
// for (const key of biblioteca) {
//     if (key.anoLanc == 2010) {
//         console.log(
//             `Titulo: ${key.titulo}
// Ano de lançamento: ${key.anoLanc} 
// `);
//     }
// }

let locadora = [
    {
        title:"O Poderoso Chefão",
        director:"Francis Ford Coppola",
        mainActor:"Marlon Brando",
        anoLanc: 1972,
        genero:"Drama"
    },
    {
        title:"Matrix",
        director:"The Wachowskis",
        mainActor:"Keanu Reeves",
        anoLanc: 1999,
        genero:"Ficção Científica"
    },
    {
        title:"O Exorcista",
        director:"William Friedkin",
        mainActor:"Linda Blair",
        anoLanc: 1973,
        genero:"Terror"
    },
    {
        title:"Forrest Gump",
        director:"Robert Zemeckis",
        mainActor:"Tom Hanks",
        anoLanc: 1994,
        genero:"Drama"
    },
    {
        title:"Star Wars: Uma Nova Esperança",
        director:"George Lucas",
        mainActor:"Mark Hamill",
        anoLanc: 1977,
        genero:"Ficção Científica"
    },
    {
        title:"Psicose",
        director:"Alfred Hitchcock",
        mainActor:"Anthony Perkins",
        anoLanc: 1960,
        genero:"Terror"
    },
    {
        title:"Vingadores: Ultimato",
        director:"Anthony e Joe Russo",
        mainActor:"Robert Downey Jr.",
        anoLanc: 2019,
        genero:"Ação"
    },
    {
        title:"A Forma da Água",
        director:"Guillermo del Toro",
        mainActor:"Sally Hawkins",
        anoLanc: 2017,
        genero:"Romance"
    },
    {
        title:"La La Land: Cantando Estações",
        director:"Damien Chazelle",
        mainActor:"Ryan Gosling",
        anoLanc: 2016,
        genero:"Musical"
    },
    {
        title:"O Lobo de Wall Street",
        director:"Martin Scorsese",
        mainActor:"Leonardo DiCaprio",
        anoLanc: 2013,
        genero:"Biografia"
    },
    {
        title:"High School Musical",
        director:"Kenny Ortega",
        mainActor:"Zac Efron",
        anoLanc: 2006,
        genero:"Musical"
    },
];

let contadorDeFilmes = {};

locadora.forEach(filme => {
    if (contadorDeFilmes[filme.genero]) {
        contadorDeFilmes[filme.genero]++
    }else{
        contadorDeFilmes[filme.genero] = 1
    }
});

for (const genero in contadorDeFilmes) {
    console.log(`Existem ${contadorDeFilmes[genero]} filmes do genero ${genero}`);
}


