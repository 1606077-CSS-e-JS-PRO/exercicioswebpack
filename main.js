const { juntaDoisNomes } = require("./js/gerenciaDeNomes")
const { mostrarResultadoNaTela, pegarValorTextualDaTela, adicionarEventoClick } = require("./js/tela")
require("./style/style.css")

adicionarEventoClick("botaoConcatenar", inicializarConcat)
// adicionarEventoClick("botaoDividir", inicializarDivisao)

function inicializarConcat() {
    // Entradas
    const nome = pegarValorTextualDaTela("inputNome")
    const sobrenome = pegarValorTextualDaTela("inputSobrenome")

    // Processamento
    let resultado = juntaDoisNomes(nome, sobrenome)

    // Saídas
    mostrarResultadoNaTela("saidaConcat", resultado)
}



