import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let valor: number = 0,
    resultado: number = 0;

console.log("Digite um número: ");
valor = teclado.questionInt("");

resultado = valor ** 2;

console.log("O quadrado de " + valor + " é " + resultado);