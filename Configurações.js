function criaCartao(Imagem, ImagemResposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <div class="cartao__conteudo__pergunta">
            <img src="${Imagem}" alt="Carta por Trás"/>
        </div>
        <div class="cartao__conteudo__resposta">
            <img src="${ImagemResposta}" alt="Desenho da Carta"/>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}