function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Se o campoPesquisa for uma string sem nada
  if(!campoPesquisa){
    section.innerHTML = "<p>Nenhum atleta encontrado. você precisa digitar o nome de um atleta ou esporte.</p>"
    return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let nome = ""
  let descricao = ""
  let tags = ""

  // Itera sobre cada atleta na lista de atletas
  for (let atleta of atletas) {
    nome = atleta.nome.toLowerCase()
    descricao = atleta.descricao.toLowerCase()
    tags = atleta.tags.toLowerCase()
    //include(): Se o campo inclui a informação que foi passada pelo usuario está dentro dos nomes presente
    // o nome estiver presente entre as informações por exemplo Rayssa Leal então ele vai retornar true e se não existir ele vai retornar false 
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.
      // Constrói o HTML para cada atleta, formatando os dados dinamicamente
      // A crase (`) permite a interpolação de strings, inserindo os valores das propriedades do atleta
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">
            ${atleta.nome}
          </a>
        </h2>
        <p class="descricao-meta">
          ${atleta.descricao}
        </p>
        <a href="${atleta.link}" target="_blank">Mais informações</a>
      </div>
    `;

    }

    // se o resultado nao existir
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  }

  // Atribui o HTML completo da lista de resultados à seção
  section.innerHTML = resultados;
}