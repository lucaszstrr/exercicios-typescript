import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let preco: number = 0,
    precoFinal: number = 0;

console.log("Digite o preco do produto: ");
preco = teclado.questionInt("");

precoFinal = preco * 0.65;

console.log("O valor com desconto é de R$" + precoFinal);