import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let numeroConta: number = 0,
    digito: number = 0;

console.log("Digite o número da conta: ");
numeroConta = teclado.questionInt("");

