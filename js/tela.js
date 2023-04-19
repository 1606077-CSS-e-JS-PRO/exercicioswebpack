

function pegarValorTextualDaTela(idElemento){
    return document.getElementById(idElemento).value
}

function mostrarResultadoNaTela(idElemento, valorMostrado){
    const elementoResultado = document.getElementById(idElemento)
    elementoResultado.innerHTML = valorMostrado
}

function adicionarEventoClick(idElemento, funcaoAExecutar){
    document.getElementById(idElemento)
    .addEventListener("click", funcaoAExecutar)
}

module.exports = {
    mostrarResultadoNaTela,
    pegarValorTextualDaTela,
    adicionarEventoClick
}