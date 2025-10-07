export class ParametroInvalidoError extends Error {
    constructor(param) {
        super(`O parâmetro '${param}' é inválido!`);
    }
}