/**
 * Ser Autencicavel significar ter um método autenticavel
 * 
 */
export class SistemaAutenticacao{
    static login(Autenticavel, senha){
        return Autenticavel.autenticar(senha);
    }
}