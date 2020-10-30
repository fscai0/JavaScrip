class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const Cliente1 = new Cliente ();
const Cliente2 = new Cliente ();
const Cliente3 = new Cliente ();


Cliente1.nome = "Caio";
Cliente1.cpf = 1112255221411;
Cliente1.agencia = 2508;
Cliente1.saldo = 0;

Cliente2.nome = "Lucas";
Cliente2.cpf = 1112265822141;
Cliente2.agencia = 2508;
Cliente2.saldo = 0;

Cliente3.nome = "Amanda";
Cliente3.cpf = 111228542141;
Cliente3.agencia = 2508;
Cliente3.saldo = 0;


console.log(Cliente1);