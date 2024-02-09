// Sistema de Gerenciamento de Funcionários:

// Crie uma interface Funcionario com propriedades como nome, salario e métodos para calcular o salário líquido.
// Implemente uma classe Gerente que implementa a interface Funcionario.
// Crie um sistema que permita cadastrar, calcular salário líquido e listar informações de funcionários.

interface Funcionario {
    nome: string;
    cargo: string;
    salarioBruto: number;
    salarioLiquido: number;
    diasTrabalhados: number;

    calcularSalarioBrutoAtual(): number;
    calcularSalarioLiquido(): void;
}

class TaxaINSS {
    salarioBruto: number;
    taxaINSS: number;

    calcularINSS(): number {
        if (this.salarioBruto <= 1412.00) return this.taxaINSS = 0.075;
        else if (this.salarioBruto <= 2666.68) return this.taxaINSS = 0.09;
        else if (this.salarioBruto <= 4000.03) return this.taxaINSS = 0.09;
        else (this.salarioBruto <= 7786.02); return this.taxaINSS = 0.09;
    }

    constructor(salarioBruto: number) {
        this.salarioBruto = salarioBruto;
        this.taxaINSS = 0;
    }
}

class FuncionarioImpl implements Funcionario {
    nome: string;
    cargo: string;
    salarioBruto: number;
    salarioLiquido: number;
    diasTrabalhados: number;

    calcularSalarioBrutoAtual(): number {
        return this.salarioBruto = (this.salarioBruto / 30) * this.diasTrabalhados;
    }

    calcularSalarioLiquido(): void {
        this.calcularSalarioBrutoAtual();
        
        const salario = new TaxaINSS(this.salarioBruto);
        this.salarioLiquido = this.salarioBruto - this.salarioBruto * salario.calcularINSS();
    }

    printInformacoesFunc(): void {
        this.calcularSalarioLiquido();

        console.log(`O nome do Funcionário é ${this.nome}, o cargo que exerce é o de ${this.cargo}, o seu salário bruto é ${this.salarioBruto}, o seu salário liquído é ${this.salarioLiquido} e este mês trabalhou ${this.diasTrabalhados} dias.`);
    }

    constructor(nome: string, cargo: string, salarioBruto: number, diasTrabalhados: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBruto = salarioBruto;
        this.salarioLiquido = 0;
        this.diasTrabalhados = diasTrabalhados;
        this.printInformacoesFunc();
    }
}

const funcionario1 = new FuncionarioImpl("Monique", "Gerente", 3000, 25);