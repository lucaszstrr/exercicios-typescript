import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let valorSaque: number = 0,
    somatorio: number = 0,
    notasCem: number = 0,
    notasCinq: number = 0,
    notasVinte: number = 0,
    notasDez: number = 0,
    notasCinco: number = 0,
    notasDois: number = 0,
    moedaUm: number = 0;

console.log("Digite o valor do saque: ");
valorSaque = teclado.questionFloat("");

notasCem = Math.floor(valorSaque / 100);
somatorio += notasCem * 100;
console.log(notasCem + " nota(s) de R$100");

notasCinq = Math.floor((valorSaque - somatorio) / 50);
somatorio += notasCinq * 50;
console.log(notasCinq + " nota(s) de R$50");

notasVinte = Math.floor((valorSaque - somatorio) / 20);
somatorio += notasVinte * 20;
console.log(notasVinte + " nota(s) de R$20");

notasDez = Math.floor((valorSaque - somatorio) / 10);
somatorio += notasDez * 10;
console.log(notasDez + " nota(s) de R$10");

notasCinco = Math.floor((valorSaque - somatorio) / 5);
somatorio += notasCinco * 5;
console.log(notasCinco + " nota(s) de R$5");

notasDois = Math.floor((valorSaque - somatorio) / 2);
somatorio += notasDois * 2;
console.log(notasDois + " nota(s) de R$2");

moedaUm = Math.floor((valorSaque - somatorio) / 1);
somatorio += moedaUm * 1;
console.log(moedaUm + " moeda(s) de R$1");

console.log(somatorio);
console.log(valorSaque - somatorio);