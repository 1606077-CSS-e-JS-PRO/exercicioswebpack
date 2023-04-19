const { juntaDoisNomes } = require("./js/gerenciaDeNomes")

require("./style/style.css")

document.getElementById("botaoConcatenar")
    .addEventListener("click", inicializarConcat)

function inicializarConcat() {
    // Entradas
    const elementoNome = document.getElementById("inputNome")
    const elementoSobrenome = document.getElementById("inputSobrenome")

    const nome = elementoNome.value
    const sobrenome = elementoSobrenome.value

    // Processamento
    let resultado = juntaDoisNomes(nome, sobrenome)

    // Saídas
    const elementoResultado = document.getElementById("saidaConcat")
    elementoResultado.innerHTML = resultado
}



