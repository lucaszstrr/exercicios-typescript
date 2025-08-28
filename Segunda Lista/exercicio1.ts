import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

const bebidaPessoa: number = 300,
    garrafa: number = 2000;

let qtdPessoas: number = 0,
    qtdLitros: number = 0,
    qtdGarrafas: number = 0;

console.log("Quantidade de pessoas: ");
qtdPessoas = teclado.questionInt("");

qtdLitros = qtdPessoas * bebidaPessoa;

qtdGarrafas = Math.round(qtdLitros / garrafa);
console.log("A quantidade de garrafas necessárias é de " + qtdGarrafas);
