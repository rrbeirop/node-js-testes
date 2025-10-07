import { ParametroInvalidoError } from '../errors/ParametroInvalidoError.js';
import { EnderecoNaoEncontradoError } from '../errors/EnderecoNaoEncontradoError.js';

export class EnderecoService {

    async buscarPorCep(cep) {
        if (typeof cep !== 'string' || !cep || !cep.match(/^\d{8}$/)) {
            throw new ParametroInvalidoError('cep');
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const endereco = await response.json();

        if (endereco.erro) {
            throw new EnderecoNaoEncontradoError(cep);
        }

        return endereco;
    }

}
