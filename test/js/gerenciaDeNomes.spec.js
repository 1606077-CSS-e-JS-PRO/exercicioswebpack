const { juntaDoisNomes } = require("../../js/gerenciaDeNomes")

describe("gerenciaDeNomes", () => {
    describe("juntaDoisNomes", () => {
        it("deve retornar Wagner Sabino ao receber Wagner como nome e Sabino como Sobrenome", () => {
            const nome = "Wagner"
            const sobrenome = "Sabino"

            const resultado = juntaDoisNomes(nome, sobrenome)

            expect(resultado).toBe("Wagner Sabino")
        })
        it("deve retornar Nome muito pequeno ao receber um nome com menos de 5 caracteres", () => {
            const nome = "Lua"
            const sobrenome = "Sabino"

            const resultado = juntaDoisNomes(nome, sobrenome)

            expect(resultado).toBe("Ferrou Nome Pequeno!")
        })
        it("deve retornar Tá tudo vazio ai! ao receber vazio em nome e sobrenome", () => {
            const nome = ""
            const sobrenome = ""

            const resultado = juntaDoisNomes(nome, sobrenome)

            expect(resultado).toBe("Tá tudo vazio ai!")
        })
    })
})
