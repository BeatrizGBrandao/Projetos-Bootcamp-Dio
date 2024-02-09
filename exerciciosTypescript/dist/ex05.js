"use strict";
// Contador de Palavras:
// Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. Considere palavras como sequências de caracteres separadas por espaços.
class ContadorDePalavras {
    contarPalavras() {
        this.arrayDePalavras = this.frase.trim().split(" ");
        this.numeroDePalavras = this.arrayDePalavras.length;
        console.log(`A sua frase possue ${this.numeroDePalavras} de palavras.`);
    }
    constructor(frase) {
        this.frase = frase;
        this.arrayDePalavras = [];
        this.numeroDePalavras = 0;
        this.contarPalavras();
    }
}
const contagem1 = new ContadorDePalavras("The book is on the table.");
