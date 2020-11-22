// classe Abstrata nao pode ser intanciada mas sim sempre erdada

export class Conta{

    constructor (saldoInicial, cliente, agencia){

        if(this.constructor == Conta){
            throw new Error("voce não devarias instanciar esse objeto do tipo Conta Diretamente");
         }

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

    // Método abstrato  
    
    throw new Error("O método Sacar da conta é abstrator e precisa ser sobreescrevido");
       // let taxa = 1;
       // return this._sacar(valor , taxa);   
    }
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;  
            if (this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                return valorSacado;
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