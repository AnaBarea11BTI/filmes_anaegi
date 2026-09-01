async function buscarFilmes() {
    const resposta = await fetch("https://filmes-anaegi.vercel.app/") 
    const filmes = await resposta.json() 
    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        console.log(filme)
        sectionFilmes.innerHTML += `
                    <div>
                        <h2>${filme.titulo}</h2>
                        <p><strong>Gênero:</strong> ${filme.genero}</p>
                        <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
                        <p><strong>Classificação indicativa:</strong> ${filme.classificacao > 0 ? filme.classificacao + ' anos' : 'Livre'}</p>
                    </div>
                `
    })
}

buscarFilmes()