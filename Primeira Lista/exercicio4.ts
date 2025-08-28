import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let pagAtual: number = 0,
    pagTotal: number = 0,
    porcentagem: number = 0;

console.log("Digite a quantidade total de páginas do livro: ");
pagTotal = teclado.questionInt("");

console.log("Digite a página atual: ");
pagAtual = teclado.questionInt("");

porcentagem = (pagAtual / pagTotal) * 100;

console.log("Você já leu " + porcentagem + "%");