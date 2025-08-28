import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let mililitros: number = 0,
    gotas: number = 0;


console.log("Digite a quantidade em mL: ");
mililitros = teclado.questionInt("");

gotas = mililitros / 0.05;

console.log("A quantidade de gotas é de: " + gotas);