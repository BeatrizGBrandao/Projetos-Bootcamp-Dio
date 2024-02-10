// Sistema Bancário:

// Crie uma interface ContaBancaria com métodos para depositar, sacar e obter saldo.
// Implemente classes ContaCorrente e ContaPoupanca que implementam a interface.
// Desenvolva um programa que permita realizar operações bancárias e exibir informações das contas.

interface ContaBancaria {
    agencia: number;
    numeroDaConta: number;

    depositar(valor: number): void;
    sacar(valor: number): void;
    obterSaldo(): void;
}

class ContaCorrente implements ContaBancaria {
    agencia: number;
    numeroDaConta: number;
    private saldoAtual: number;
    private limiteChequeEspecial: number;

    constructor(agencia: number, numeroDaConta: number, limiteChequeEspecial: number) {
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldoAtual = 0;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    depositar(valor: number): void {
        this.saldoAtual += valor;

        console.log(`Valor de ${valor} depositado em sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }

    sacar(valor: number): void {
        if (this.saldoAtual + this.limiteChequeEspecial >= valor) {
            this.saldoAtual -= valor;
            console.log(`Valor de ${valor} sacado da sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        } else {
            throw new Error(`Saldo insuficiente para o saque no valor de ${valor}. (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }   
    }

    obterSaldo(): void {        
        console.log(`Valor atual em sua conta: ${this.saldoAtual} (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }
}

class ContaPoupanca implements ContaBancaria {
    agencia: number;
    numeroDaConta: number;
    private saldoAtual: number;
    private taxaRendimento: number;

    constructor(agencia: number, numeroDaConta: number, taxaRendimento: number) {
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldoAtual = 0;
        this.taxaRendimento = taxaRendimento;
    }

    depositar(valor: number): void {
        this.saldoAtual += valor;

        console.log(`Valor de ${valor} depositado em sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
    }

    sacar(valor: number): void {
        if (this.saldoAtual >= valor) {
            this.saldoAtual -= valor;

            console.log(`Valor de ${valor} sacado da sua conta (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        } else {
            throw new Error(`Saldo insuficiente para o saque no valor de ${valor}. (Agência: ${this.agencia} / Número da Conta: ${this.numeroDaConta}). \n`);
        }  
    }

    obterSaldo(): number {
        return this.saldoAtual;
    }

    aplicarRendimento(): void {
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
