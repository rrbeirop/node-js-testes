import { Boletim } from '../../src/utils/Boletim.js';


describe('Boletim', () => {
  let boletim;

  beforeEach(() => {
    boletim = new Boletim();
  });

  describe('adicionarNota', () => {
    test('deve adicionar uma nota válida', () => {
      boletim.adicionarNota(8);
      expect(boletim.notas).toContain(8);
    });

    test('deve lançar TypeError para nota não numérica', () => {
      expect(() => boletim.adicionarNota('a')).toThrow(TypeError);
      expect(() => boletim.adicionarNota(NaN)).toThrow(TypeError);
    });

    test('deve lançar Error para nota fora do intervalo', () => {
      expect(() => boletim.adicionarNota(-1)).toThrow(Error);
      expect(() => boletim.adicionarNota(11)).toThrow(Error);
    });
  });

  describe('calcularMedia', () => {
    test('deve retornar 0 se não houver notas', () => {
      expect(boletim.calcularMedia()).toBe(0);
    });

    test('deve calcular a média corretamente', () => {
      boletim.adicionarNota(6);
      boletim.adicionarNota(8);
      expect(boletim.calcularMedia()).toBe(7);
    });
  });

  describe('verificarAprovacao', () => {
    test('deve aprovar se média for igual ou maior que a mínima', () => {
      boletim.adicionarNota(7);
      boletim.adicionarNota(8);
      expect(boletim.verificarAprovacao()).toBe(true);
    });

    test('deve reprovar se média for menor que a mínima', () => {
      boletim.adicionarNota(5);
      boletim.adicionarNota(6);
      expect(boletim.verificarAprovacao()).toBe(false);
    });

    test('deve aceitar média mínima customizada', () => {
      boletim.adicionarNota(6);
      boletim.adicionarNota(7);
      expect(boletim.verificarAprovacao(6.5)).toBe(true);
    });
  });
});