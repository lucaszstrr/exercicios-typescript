import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let pontuacoes: number[] = [];

console.log("Digite os pontos: ");
pontuacoes[0] = teclado.questionInt("");
pontuacoes[1] = teclado.questionInt("");
pontuacoes[2] = teclado.questionInt("");
pontuacoes[3] = teclado.questionInt("");
pontuacoes[4] = teclado.questionInt("");

pontuacoes.sort((a,b) => a - b);


console.log("O primeiro colocado fez " + pontuacoes[4] + " pontos");
console.log("O último colocado fez " + pontuacoes[0] + " pontos");