import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let a: number = 0,
    b: number = 0,
    auxiliar: number = 0;

console.log("Digite o valor da variável A:");
a = teclado.questionInt("");

console.log("Digite o valor da variável B:");
b = teclado.questionInt("");

auxiliar = a;

a = b;

b = auxiliar;

console.log("O novo valor de A é: " + a);
console.log("O novo valor de B é: " + b);