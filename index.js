import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 43681223807);
diretor.CasdastrarSenha("123456");

const gerente = new Gerente ("Ricardo", 5000, 1245784512521);
gerente.CasdastrarSenha("123");

const cliente = new Cliente ("Caio", 43681223807,"123457");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123457");


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

