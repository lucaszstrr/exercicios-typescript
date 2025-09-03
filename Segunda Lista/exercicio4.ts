import ReadlineSync from "./readline-sync.ts";
let teclado = new ReadlineSync();

let angulo: number = 0,
    angCorrespon: number = 0,
    angRadianos: number = 0,
    seno: number = 0,
    cosseno: number = 0,
    tangente: number = 0,
    pi: number = 3.14;

console.log("Digite um angulo: ");
angulo = teclado.questionInt("");

angCorrespon = angulo % 360;
console.log("Perfaz " + Math.trunc(angulo / 360) + " voltas e o ângulo correspondente é de " + angCorrespon + "º");

angRadianos = (angulo * pi) / 180;
console.log("Ângulo em radianos " + angRadianos.toFixed(2) + "º");

seno = Math.sin(angulo);
console.log("Seno é de " + seno.toFixed(2));

cosseno = Math.cos(angulo);
console.log("Cosseno é de " + cosseno.toFixed(2));

tangente = Math.tan(angulo);
console.log("Tangente é de " + tangente.toFixed(2));