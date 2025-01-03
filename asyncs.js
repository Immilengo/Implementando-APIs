const url = "https://v6.exchangerate-api.com/v6/9a0c673ec292e40b6ecb139d/latest/USD"
const divele = document.getElementById("teste");

async function listarmoedas() {
    try {
        const resposta = await fetch(url)
        const conversao = await resposta.json()
        const apresentar = JSON.stringify(conversao.conversion_rates)
        alert(apresentar)
        console.log(apresentar)
        apresentar.forEach(dado => {
        console.log(dado)
        const novoele = `<div> ${dado}</div>`
        divele.innerHTML += novoele;
        })   
    } catch (error) {
        console.log(error)
    }
}
listarmoedas();