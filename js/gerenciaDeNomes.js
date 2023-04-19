function juntaDoisNomes(nome, sobrenome) {
    if (nome == "" && sobrenome == "")
        return "Tá tudo vazio ai!"

    if(nome.length < 5)
        return "Ferrou Nome Pequeno!"

    return `${nome} ${sobrenome}`
}

module.exports = {
    juntaDoisNomes
}