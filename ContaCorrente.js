import { Cliente } from "./Cliente.js"; // auto import da palavra reservada instanceof


 export class ContaCorrente { 
    static numeroDeContas = 0;   // variavel contadora, precisa definir ela como estatica, define quantidade de contas para todas as contas
    agencia;
    _cliente;


    _saldo = 0; //atributo da classe ContaCorrente é privado

    
    // ---------------------------------------------------------
    // Regra de proteção para atributos privados
    set cliente(novoValor){     
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
     // Regra de proteção para atributos privados

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


     // ---------------------------------------------------------

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;      // ja possui acessor então não precisa definir como privado
        ContaCorrente.numeroDeContas += 1;    // atribui a contagem sempre +1 
    }





    sacar(valor) {
        if (this._saldo >= valor) {
                this._saldo -= valor;
                return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;     // EARLY RETURN
        }
        this._saldo += valor;
    }

    tranferir (valor, conta){   // método transferir com o auxílio da composição de classes
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
