export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    // acessor para dar acesso a senha de uma forma segura
    // dessa forma mantemos o encapsulamento e a segurança 

    autenticar(senha){
        return senha == this._senha;
    }

     CasdastrarSenha(senha){
         this._senha = senha;
     }
}