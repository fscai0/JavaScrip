
import { Conta } from "./Conta.js";


 export class ContaCorrente extends Conta { 
    static numeroDeContas = 0;   // variavel contadora, precisa definir ela como estatica, define quantidade de contas para todas as contas
    
    constructor(cliente, agencia){  
        super(0, cliente, agencia); // Palavra privada SUPER que refencia ao super construtor que precisa dos parametros referenciados      
        ContaCorrente.numeroDeContas += 1;    // atribui a contagem sempre +1 
    }

    // sobre escrevendo o metodo da classe Mae 
    sacar(valor) { 
        let taxa = 1.1;
        return this._sacar(valor , taxa); 
    }


}
