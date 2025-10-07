import { expect, jest } from '@jest/globals';
import { EnderecoService } from '../../src/services/EnderecoService.js';
import { ParametroInvalidoError } from '../../src/errors/ParametroInvalidoError.js';
import { EnderecoNaoEncontradoError } from '../../src/errors/EnderecoNaoEncontradoError.js';

describe('EnderecoService.js', () => {
    let enderecoService;

    beforeEach(() => {
        enderecoService = new EnderecoService();
    });

    describe('Método buscarPorCep', () => {
        test('Deve falhar quando parametro cep não string', async () => {
            await expect(enderecoService.buscarPorCep(123)).rejects.toThrow(ParametroInvalidoError);
        });

        test('Deve falhar quando parametro cep nulo', async () => {
            await expect(enderecoService.buscarPorCep(null)).rejects.toThrow(ParametroInvalidoError);
        });

        test('Deve falhar quando parametro cep vazio', async () => {
            await expect(enderecoService.buscarPorCep('')).rejects.toThrow(ParametroInvalidoError);
        });

        test('Deve falhar quando parametro cep menor que 8 digitos', async () => {
            await expect(enderecoService.buscarPorCep('123456')).rejects.toThrow(ParametroInvalidoError);
        });

        test('Deve falhar quando parametro cep maior que 8 digitos', async () => {
            await expect(enderecoService.buscarPorCep('123456789')).rejects.toThrow(ParametroInvalidoError);
        });

        test('Deve falhar quando não encontrar cep', async () => {
            const mockResposta = {
                erro: 'não encontrado'
            };
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve(mockResposta)
                })
            );

            await expect(enderecoService.buscarPorCep('12345678'))
                .rejects
                .toThrow(EnderecoNaoEncontradoError);
        });

        test('Deve passar quando encontrar cep', async () => {
            const mockResposta = {
                cep: '01001-000',
                logradouro: 'Praça da Sé',
                complemento: 'lado ímpar',
                unidade: '',
                bairro: 'Sé',
                localidade: 'São Paulo',
                uf: 'SP',
                estado: 'São Paulo',
                regiao: 'Sudeste',
                ibge: '3550308',
                gia: '1004',
                ddd: '11',
                siafi: '7107'
            };
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve(mockResposta)
                })
            );

            const resposta = await enderecoService.buscarPorCep('12345678');

            expect(resposta).toEqual({
                cep: '01001-000',
                logradouro: 'Praça da Sé',
                complemento: 'lado ímpar',
                unidade: '',
                bairro: 'Sé',
                localidade: 'São Paulo',
                uf: 'SP',
                estado: 'São Paulo',
                regiao: 'Sudeste',
                ibge: '3550308',
                gia: '1004',
                ddd: '11',
                siafi: '7107'
            })
        });
    });
});
