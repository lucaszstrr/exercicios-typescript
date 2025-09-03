import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let valor: number = 0,
    juros: number = 0,
    meses: number = 0,
    valorFinal: number = 0;

console.log("Digite o valor investido: ");
valor = teclado.questionFloat("");

console.log("Digite a taxa de juros mensal: ");
juros = teclado.questionFloat("");

console.log("Digite quantos meses ficou investido: ");
meses = teclado.questionInt("");

valorFinal = valor * ((1 + juros / 100) ** meses);

console.log(valorFinal.toFixed(2));