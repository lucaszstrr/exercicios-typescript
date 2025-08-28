import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let salario: number = 0,
    salarioReajustado: number = 0;

console.log("Digite o salário: ");
salario = teclado.questionInt("");

salarioReajustado = salario * 1.125;

console.log("O novo salário é de R$" + salarioReajustado);