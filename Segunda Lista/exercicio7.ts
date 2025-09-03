import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let base: number = 0,
    altura: number = 0,
    escada: number = 0;

console.log("Digite a altura do prédio em metros: ");
altura = teclado.questionInt("");

console.log("Digite o tamanho da base em metros: ");
base = teclado.questionInt("");

escada = Math.sqrt((base ** 2) + (altura ** 2)); 

console.log("O tamanho da escada deve ser de " + escada.toFixed(2) + " metros");