import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let numero: number = 0;

console.log("Digite um numero com decimais: ");
numero = teclado.questionFloat("");

console.log("Com Math.ceil(): " + Math.ceil(numero)); //arredonda para cima
console.log("Com Math.floor(): " + Math.floor(numero)); //arredonda para baixo
console.log("Com Math.round(): " + Math.round(numero)); //arredonda para o inteiro mais proximo
console.log("Com Math.trunc(): " + Math.trunc(numero)); //tira os decimais 