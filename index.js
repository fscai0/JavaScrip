import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo",11122233309);
// instanciando o objeto contaCorrente 

const contaCorrente = new ContaCorrente(cliente1, 1001);

//contaCorrente.sacar(100);
//contaCorrente.depositar(500);

const contaPoupanca = new ContaPoupanca(50, cliente1 , 1001 );

const conta = new Conta(0, cliente1, 1001);

//console.log(contaPoupanca);
