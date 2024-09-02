let idade = [];
//criação das linhas da tabela
idade['Criança'] = []; 
idade['Jovem'] = []; 
idade['Adulto'] = []; 

idade['Criança'][0] = 5
idade['Criança'][1] = 6
idade['Criança'][2] = 10

idade['Jovem'][0] = 14
idade['Jovem'][1] = 15
idade['Jovem'][2] = 17

idade['Adulto'][0] = 19
idade['Adulto'][1] = 32
idade['Adulto'][2] = 50
idade['Adulto'][3] = 22

console.table(idade);
console.log(idade.length);

console.log(idade.sort());
//--------------------------------------------------------------------
let nomes = ["Diego", "Marcos",
    "Gabriel", "João", "Lucia",
    "Raimundo", "Maria", "Luziane",
    "Luiza", "Vitor"]

let frutas = ["Carambola", "Graviola", "Romã", "Acerola",
    "Mamão", "Figo", "Jabuticaba", "Kiwi", "Cabeludinha", "Lichia"]

function OrdenerNames(array) {
    return array.sort();
}

console.table(OrdenerNames(nomes));
console.table(OrdenerNames(frutas));
