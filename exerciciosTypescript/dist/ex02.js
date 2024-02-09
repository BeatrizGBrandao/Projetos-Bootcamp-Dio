"use strict";
// Verificador de Números Pares:
// Escreva um programa que receba um número como entrada e determine se é par ou ímpar. Imprima o resultado.
class VerificadorDeNumeros {
    verificar() {
        if (this.numero % 2 === 0) {
            this.resultado = "par";
        }
        else {
            this.resultado = "ímpar";
        }
        console.log(`Este número (${this.numero}) é ${this.resultado}!`);
    }
    constructor(numero) {
        this.numero = numero;
        this.resultado = "";
    }
}
const verificacao1 = new VerificadorDeNumeros(9);
verificacao1.verificar();
