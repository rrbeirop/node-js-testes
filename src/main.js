import { Calculadora } from "./utils/Calculadora.js";
import { Boletim } from "./utils/Boletim.js";
import { EnderecoService } from "./services/EnderecoService.js";

const calculadora = new Calculadora();
const resultado = calculadora.somar(3, 3);
console.log(resultado);

const boletim = new Boletim();
boletim.adicionarNota(10);
boletim.adicionarNota(7);
const nota = boletim.calcularMedia();
const aprovado = boletim.calcularMedia();
console.log(nota, `aprovado: ${aprovado}`);

const enderecoService = new EnderecoService();
const endereco = await enderecoService.buscarPorCep('01001000');
console.log(endereco);