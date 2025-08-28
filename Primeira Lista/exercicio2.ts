import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let notaUm: number = 0,
    notaDois: number = 0,
    notaTres: number = 0,
    notaQuatro: number = 0,
    media: number = 0;


console.log("Digite a primeira nota: ");
notaUm = teclado.questionInt("");

console.log("Digite a segunda nota: ");
notaDois = teclado.questionInt("");

console.log("Digite a terceira nota: ");
notaTres = teclado.questionInt("");

console.log("Digite a quarta nota: ");
notaQuatro = teclado.questionInt("");

media = (notaUm + notaDois + notaTres + notaQuatro) / 4;

console.log("A média é: " + media);