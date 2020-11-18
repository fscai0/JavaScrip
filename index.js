import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo",11122233309);
// instanciando o objeto contaCorrente 
const contaCorrenteRicardo = new ContaCorrente( 1001 , cliente1);
contaCorrenteRicardo.depositar(500);

const contaPoupanca = new ContaPoupança(50, cliente1, 1001 );

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);