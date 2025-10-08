import { Carrinho } from "../../src/utils/CarrinhoCompras";
describe('Testes unitários da classe Calculadora.js', () => {


    let CarrinhoCompras;

    beforeEach(() => {
        Carrinho = new carir();
    });

    describe('Testes para método somar()', () => {
        test('Deve falhar quando parametro a null', () => {
            expect(() => CarrinhoCompras.adicinarItem(null)).toThrow(TypeError);
        });

        test('Deve falhar quando parametro b null', () => {
            expect(() => calculadora.somar(1, null)).toThrow(TypeError);
        });

        test('Deve falhar quando parametro a invalido string', () => {
            expect(() => calculadora.somar('hello', 1)).toThrow(TypeError);
        });

        test('Deve falhar quando parametro b invalido string', () => {
            expect(() => calculadora.somar(1, '6')).toThrow(TypeError);
        });

        test('Deve falhar quando parametro a NaN', () => {
            expect(() => calculadora.somar(Number([1, 2]), 6)).toThrow(TypeError);
        });

        test('Deve falhar quando parametro b NaN', () => {
            expect(() => calculadora.somar(1, Number([1, 2]))).toThrow(TypeError);
        });

        test('Deve somar 2 numeros positivos', () => {
            const resultado = calculadora.somar(1, 2)

            expect(resultado).toBe(3);
        });

        test('Deve somar 1 positivo e 1 negativo', () => {
            const resultado = calculadora.somar(10, -10);

            expect(resultado).toBe(0);
        });

        test('Deve somar 1 negativo e 1 positivo', () => {
            const resultado = calculadora.somar(-10, 10);

            expect(resultado).toBe(0);
        });

        test('Deve somar 2 negativos', () => {
            const resultado = calculadora.somar(-10, -10);

            expect(resultado).toBe(-20);
        });

        test('Deve somar 2 valores 0', () => {
            const resultado = calculadora.somar(0, 0);

            expect(resultado).toBe(0);
        });
    });
});
