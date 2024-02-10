"use strict";
// Sistema Bancário:
class ContaCorrente {
    constructor(agencia, numeroDaConta, limiteChequeEspecial) {
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldoAtual = 0;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldoAtual += valor;
        console.log(`Valor de ${valor} depositado em sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }
    sacar(valor) {
        if (this.saldoAtual + this.limiteChequeEspecial >= valor) {
            this.saldoAtual -= valor;
            console.log(`Valor de ${valor} sacado da sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }
        else {
            throw new Error(`Saldo insuficiente para o saque no valor de ${valor}. (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }
    }
    obterSaldo() {
        console.log(`Valor atual em sua conta: ${this.saldoAtual} (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }
}
class ContaPoupanca {
    constructor(agencia, numeroDaConta, taxaRendimento) {
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldoAtual = 0;
        this.taxaRendimento = taxaRendimento;
    }
    depositar(valor) {
        this.saldoAtual += valor;
        console.log(`Valor de ${valor} depositado em sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }
    sacar(valor) {
        if (this.saldoAtual >= valor) {
            this.saldoAtual -= valor;
            console.log(`Valor de ${valor} sacado da sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }
        else {
            throw new Error(`Saldo insuficiente para o saque no valor de ${valor}. (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }
    }
    obterSaldo() {
        return this.saldoAtual;
    }
    aplicarRendimento() {
        this.saldoAtual += this.saldoAtual * (this.taxaRendimento / 100);
        console.log(`Rendimento aplicado. Novo saldo: ${this.obterSaldo()}.`);
    }
}
// const contaCorrente1 = new ContaCorrente(1234, 827263, 3000);
// contaCorrente1.obterSaldo();
// contaCorrente1.depositar(400);
// contaCorrente1.sacar(10000);
// contaCorrente1.obterSaldo();
const contaPoupanca1 = new ContaPoupanca(1234, 746446, 2);
contaPoupanca1.depositar(400);
contaPoupanca1.sacar(500);
contaPoupanca1.aplicarRendimento();
