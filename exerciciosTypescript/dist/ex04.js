"use strict";
// Validador de Senha:
// Crie uma função que receba uma senha como entrada e verifique se ela atende a critérios mínimos de segurança (por exemplo, ter pelo menos 8 caracteres, incluindo números e letras).
class ValidadorSenha {
    validarSenha() {
        if (this.senha.length < 8 || !/[a-zA-Z]/.test(this.senha) || !/\d/.test(this.senha)) {
            this.estaValida = false;
        }
        this.verificarSeEstaValida();
    }
    verificarSeEstaValida() {
        if (this.estaValida) {
            console.log(`A sua senha (${this.senha}) está válida.`);
        }
        else {
            console.log(`A sua senha (${this.senha}) não está válida. Ela deve possuir 8 caracteres, incluindo letras e números.`);
        }
    }
    constructor(senha) {
        this.senha = senha;
        this.estaValida = true;
        this.validarSenha();
    }
}
const senha1 = new ValidadorSenha("be@Triz10");
