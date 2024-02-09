"use strict";
// Tabuada:
// Peça ao usuário para inserir um número e imprima a tabuada desse número até 10.
class Tabuada {
    calcular() {
        for (let i = 0; i <= 10; i++) {
            this.resultadoCalculo = this.numero * i;
            this.tabuada += `\n ${this.numero} * ${i} = ${this.resultadoCalculo}.`;
        }
        console.log(`
            ${this.tabuada}
        `);
    }
    constructor(numero) {
        this.numero = numero;
        this.resultadoCalculo = 0;
        this.tabuada = "";
        this.calcular();
    }
}
const calculo1 = new Tabuada(5);
