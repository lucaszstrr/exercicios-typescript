import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let altura: number = 0,
    raio: number = 0,
    agua: number = 0;

console.log("Digite a altura da piscina: ");
altura = teclado.questionFloat("");

console.log("Digite o raio da piscina: ");
raio = teclado.questionFloat("");

agua = (3.14 * (raio ** 2)) * altura;

console.log("São necessários " + agua.toFixed(2) + " litros de água");