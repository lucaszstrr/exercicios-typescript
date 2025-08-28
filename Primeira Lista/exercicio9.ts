import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let valor: number = 0,
    milhar: number = 0,
    centena: number = 0,
    dezena: number = 0,
    unidade: number = 0;

console.log("Digite um valor: ");
valor = teclado.questionInt("");

if (valor < 1000|| valor > 9999) {

    console.log("Número inválido");

} else {

    milhar = Math.floor(valor / 1000);

    console.log("Milhares: " + milhar);

    centena = (valor - milhar * 1000) / 100;

    console.log("Centenas: " + Math.floor(centena));

    dezena = (valor - (milhar * 1000 + (Math.floor(centena) * 100))) / 10; 

    console.log("Dezenas: " + Math.floor(dezena));

    unidade = valor - ((milhar * 1000) + (Math.floor(centena) * 100) + (Math.floor(dezena) * 10));

    console.log("Unidades: " + unidade);

}




