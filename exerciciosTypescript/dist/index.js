"use strict";
// Iniciantes:
// Calculadora Simples:
// Crie uma calculadora simples que receba dois números e uma operação (adição, subtração, multiplicação, divisão) como entrada e retorne o resultado.
class Calculadora {
    calcular() {
        if (this.operacao === "+")
            this.resultado = (this.num1 + this.num2);
        else if (this.operacao === "-")
            this.resultado = this.num1 - this.num2;
        else if (this.operacao === "*")
            this.resultado = this.num1 * this.num2;
        else if (this.operacao === "/")
            this.resultado = this.num1 / this.num2;
        console.log(`${this.num1} ${this.operacao} ${this.num2} = ${this.resultado}.`);
    }
    constructor(num1, num2, operacao) {
        this.num1 = num1;
        this.num2 = num2;
        this.operacao = operacao;
        this.resultado = 0;
    }
}
const conta1 = new Calculadora(20, 30, "/");
conta1.calcular();
