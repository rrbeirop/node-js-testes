export class EnderecoNaoEncontradoError extends Error {
    constructor(cep) {
        super(`Não foi encontrado um endereço para o CEP ${cep}.`);
    }
}