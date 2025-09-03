import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let distancia: number = 0,
    tempo: number = 0,
    veloMedia: number = 0;

console.log("Digite a distancia em kms: ");
distancia = teclado.questionFloat("");

console.log("Digite o tempo em horas: ");
tempo = teclado.questionFloat("");

veloMedia = distancia / tempo;

console.log("A velocidade média é de " + veloMedia.toFixed(2) + " km/h");