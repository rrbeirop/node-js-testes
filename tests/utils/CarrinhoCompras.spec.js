import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras.js";
    describe('CarrinhoDeCompras', () => {
    let carrinho;

    beforeEach(() => {
        carrinho = new CarrinhoDeCompras();
    });

    describe('adicionarItem', () => {
        test('deve adicionar um item corretamente', () => {
            carrinho.adicionarItem('Arroz', 10, 2);
            expect(carrinho.itens).toHaveLength(1);
            expect(carrinho.itens[0]).toEqual({ nome: 'Arroz', preco: 10, quantidade: 2 });
        });

        test('deve lançar erro para nome vazio', () => {
            expect(() => carrinho.adicionarItem('', 10, 1)).toThrow("Dados do item inválidos");
        });

        test('deve lançar erro para preco <= 0', () => {
            expect(() => carrinho.adicionarItem('Feijão', 0, 1)).toThrow("Dados do item inválidos");
        });

        test('deve lançar erro para quantidade <= 0', () => {
            expect(() => carrinho.adicionarItem('Feijão', 5, 0)).toThrow("Dados do item inválidos");
        });
    });

    describe('removerItem', () => {
        test('deve remover um item pelo nome', () => {
            carrinho.adicionarItem('Arroz', 10, 2);
            carrinho.removerItem('Arroz');
            expect(carrinho.itens).toHaveLength(0);
        });

        test('deve lançar erro se o item não for encontrado', () => {
            expect(() => carrinho.removerItem('Inexistente')).toThrow("Item não encontrado");
        });
    });

    describe('calcularTotal', () => {
        test('deve calcular o total corretamente', () => {
            carrinho.adicionarItem('Arroz', 10, 2); // 20
            carrinho.adicionarItem('Feijão', 5, 3); // 15
            expect(carrinho.calcularTotal()).toBe(35);
        });

        test('deve retornar 0 para carrinho vazio', () => {
            expect(carrinho.calcularTotal()).toBe(0);
        });
    });

    describe('limparCarrinho', () => {
        test('deve limpar todos os itens do carrinho', () => {
            carrinho.adicionarItem('Arroz', 10, 2);
            carrinho.limparCarrinho();
            expect(carrinho.itens).toHaveLength(0);
        });
    });
});