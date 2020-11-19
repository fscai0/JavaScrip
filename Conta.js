export class Conta{

    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

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


    sacar(valor) { 
        let taxa = 1
        const valorSacado = taxa * valor;  

        if (this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 100){
            return;     // EARLY RETURN
        }
        this._saldo += valor;
    }

    tranferir (valor, conta){   // método transferir com o auxílio da composição de classes
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}