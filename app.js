function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma sting sem nada, pode ser usado "!campoPesquisa"
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dados da lista
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, incluindo título, descrição e link
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }

    }
    //A exclamação é uma negação, se resultados não tiver nada vai informar
    if(!resultados) {
        resultados = "<p>Nada foi encontraaaaaaado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}





/*
//console.log(dados);
modos de apresentar as informações no console
console.log(dados[0,1,2]);
console.log(dados[0].titulo);
https://pt.wikipedia.org/wiki/Rebeca_Andrade
Laço = FOR
para cada dado dentro da lista de dados
*/