/*const nome = "inacio"
console.log(nome);

const mypromisses = new Promise((resolve, reject) => {
  if(nome === "inaci"){
    resolve(nome)
  }else{
    reject("Lamentamos mas o nome é diferente")
  }
})
const mypromisses2 = new Promise((resolve, reject) => {
    if(nome === "inacio"){
      resolve(nome)
    }else{
      reject("Lamentamos mas o nome é diferente")
    }
  })
const listarpromisses = Promise.all(([mypromisses,mypromisses2])).then((lista) => {
    console.log(lista)
}).catch((err) => {
    console.log(err);
})

// Exemplo de requisição
try {
    var artist = "Adele";
    var song = "Hello";
    var apiKey = "SUA_CHAVE_AQUI";
    url = "https://api.vagalume.com.br/search.php?art="+artist+"&mus="+song+"&apikey={key}"
    url2 = "https://api.vagalume.com.br/search.php?musid=3ade68b6g4946fda3&apikey={key}"
    async function testeapi() {
        const letra = await fetch(url2)
        const musica = await letra.json()
        console.log(musica)
    }    
    testeapi()
} catch (error) {
    console.log(error)    
}

try {
    // Could be GET or POST/PUT/PATCH/DELETE
    async function nam() {
    const res = await fetch('https://dummyjson.com/products');
    const json = await res.json();
    console.log(json);   
    }
    nam();
    // { status: 'ok', method: 'GET' }
} catch (error) {
    console.log(error)
}

try {
    async function arr() {    
        fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 30, // optional, defaults to 60
            }),
          })
          .then(res => res.json())
          .then(console.log);
    }
} catch (error) {
    console.log(error)
}
*/
/*
async function nome() {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(resp => {
            const usuarios = resp.users; // Acessa a lista de usuários
            const listarDiv = document.getElementById("listar");

            // Limpa o conteúdo atual
            listarDiv.innerHTML = "";
            alert(usuarios)
            // Itera sobre os usuários e cria elementos HTML
            usuarios.forEach(user => {
                alert(user);
                const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${user.firstName} ${user.lastName}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;
                listarDiv.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar os dados:", error);
        });
}


try {
    const objecto ={
        nome : 'inacio',
        idade : 20,
        local : 'golf 2'
    }
    console.log(objecto.nome)
} catch (error) {
    
}*/

//https://www.meteoblue.com/pt/tempo/semana/luanda_angola_2240449

//api ke do excenge api para conversão de moedas:9a0c673ec292e40b6ecb139d
const url = "https://v6.exchangerate-api.com/v6/9a0c673ec292e40b6ecb139d/latest/USD"
const divele = document.getElementById("listar")
const novo = document.createElement("li")

async function excenge(){
    const resp = await fetch(url)
    const res = await resp.json()
    console.log(res.conversion_rates)
    
            const teste = JSON.stringify(res.conversion_rates);
            const novoele = `<p>${teste}</p>`
            //alert(teste)
            divele.innerHTML += novoele;
}
excenge()