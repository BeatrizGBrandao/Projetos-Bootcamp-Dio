"use strict";
// Sistema de Gerenciamento de Funcionários:
class TaxaINSS {
    static calcularINSS(salarioBruto) {
        let taxa = 0;
        for (const faixa of this.TABELA_INSS) {
            if (salarioBruto <= faixa.limite) {
                taxa = faixa.taxa;
                break;
            }
        }
        return taxa;
    }
}
TaxaINSS.TABELA_INSS = [
    { limite: 1412.00, taxa: 0.075 },
    { limite: 2666.68, taxa: 0.09 },
    { limite: 4000.03, taxa: 0.09 },
    { limite: 7786.02, taxa: 0.09 }
];
class FuncionarioImpl {
    calcularSalarioLiquido() {
        const salarioBrutoAtual = (this.salarioBruto / 30) * this.diasTrabalhados;
        const taxaINSS = TaxaINSS.calcularINSS(salarioBrutoAtual);
        const salarioLiquido = salarioBrutoAtual - salarioBrutoAtual * taxaINSS;
        return salarioLiquido;
    }
    printInformacoesFunc() {
        this.salarioLiquido = this.calcularSalarioLiquido();
        console.log(`O nome do Funcionário é ${this.nome}, o cargo que exerce é o de ${this.cargo}, o seu salário bruto é ${this.salarioBruto}, o seu salário liquído é ${this.salarioLiquido} e este mês trabalhou ${this.diasTrabalhados} dias.`);
    }
    constructor(nome, cargo, salarioBruto, diasTrabalhados) {
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBruto = salarioBruto;
        this.salarioLiquido = 0;
        this.diasTrabalhados = diasTrabalhados;
    }
}
const funcionario1 = new FuncionarioImpl("Monique", "Gerente", 3000, 25);
funcionario1.printInformacoesFunc();
