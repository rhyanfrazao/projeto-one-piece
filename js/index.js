/*Passo 1: Pegar os botões para verificar quando o usuário utilizá-los*/

const botoes = document.querySelectorAll('.botao');

/*Passo 4: Pegar os personagens no JS para poder mostrar ou esconder*/

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        /*Passo 3: Verificar se já existe a classe selecionado e remove-la*/
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        /*Passo 2: Adicionar classe selecionado no botão*/
        botao.classList.add("selecionado");

        /*Passo 6: Verificar se já existe personagem selecionado e remove-lo quando necessário*/
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        
        /*Passo 5: Adicionar a classe selecionado no personagem*/
        personagens[indice].classList.add("selecionado");
    });
});



