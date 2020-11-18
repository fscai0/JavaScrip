export class ContaPoupança{
    constructor (saldoInicial, agencia, cliente){
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
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