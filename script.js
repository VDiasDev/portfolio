const todosModal = document.querySelectorAll('.modal');
const contentModal = document.querySelectorAll(".modal-content");
const projeto = document.querySelectorAll(".projetos-lista__item-link");
const span = document.querySelectorAll(".fecha");
const bolinhaLoop = document.querySelector('.sobremim__imagem-imagem');
const levantamentoImg = document.querySelector('.projetos-imagem-imagem');
const levantamentoCnt = document.querySelector(".projetos-imagem");
const habilidadeBtn = document.querySelectorAll('.habilidades__infos__itens__lista-container') ;
const habilidadeDescricaoLista = document.querySelectorAll('.habilidade__descricao');
const textoMeAjuda = document.querySelector(".me-ajuda-texto");
const imagemHabilidade = document.querySelector(".imagem_habilidade");

loopImagens = null;
let numeroDaImagemLoop = 1;

desceImagens = null;
let numeroLevantamentoImg = 9;

desceOScroll("inicio");
desceOScroll("sobremim");
desceOScroll("projetos");
desceOScroll("habilidades");

//projetando o click no cabeçalho para descer a página
function desceOScroll(paraOnde){
    document.querySelector(`.alvo-${paraOnde}`).addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(`.${paraOnde}`).scrollIntoView({ 
            behavior: 'smooth'
        });
    });
}


//Projetando a janela suspensa para mostrar os projetos
projeto.forEach(projeto_atual => {
    projeto_atual.onclick = function() {
        if(projeto_atual.classList.contains("nobody")){
            const nobody = document.querySelector(".nobody_modal")
            nobody.style.display = "block";
            contentModal.forEach(content_Atual => {
                content_Atual.style.backgroundImage = "url('./img/nobody_some.png')";
            })
        } else if(projeto_atual.classList.contains("quadrinhos")){
            const quadrin = document.querySelector(".quadrinhos_modal")
            quadrin.style.display = "block";
            contentModal.forEach(content_Atual => {
                content_Atual.style.backgroundImage = "url('./img/quadrinhos_some.png')";
            })
        } else if(projeto_atual.classList.contains("tarefas")){
            const tarefa = document.querySelector(".tarefas_modal")
            tarefa.style.display = "block";
            contentModal.forEach(content_Atual => {
                content_Atual.style.backgroundImage = "url('./img/tarefas_some.png')";
            })
        } else if (projeto_atual.classList.contains("emBreve")){
            const breve = document.querySelector(".emBreve_modal")
            breve.style.display = "block";
            contentModal.forEach(content_Atual => {
                content_Atual.style.backgroundImage = "url('./img/emBreve_some.png')";
            })
        }
    }
})


//fecha o modal clicando no X
span.forEach(cadaSpan => {
    cadaSpan.onclick = function() {
        todosModal.forEach(cadaModal => {
            cadaModal.style.display = "none";
        })
    }
})
//fecha o modal clicando fora da área dele
window.onclick = function(event) {
    todosModal.forEach(cadaModal => {
        if (event.target == cadaModal) {
            cadaModal.style.display = "none";
        }
    })
}


//Looping da bolinha pingando
bolinhaLoop.setAttribute('src', `./img/bolinha/bolinha-${numeroDaImagemLoop}.png`);
const tempoDoLoop = () => {
    numeroDaImagemLoop++
    if (numeroDaImagemLoop > 12){
        numeroDaImagemLoop = 1
    }
    bolinhaLoop.setAttribute('src', `./img/bolinha/bolinha-${numeroDaImagemLoop}.png`);
}
loopImagens = setInterval(tempoDoLoop, 75)

//código para levantar o peso clicando
levantamentoImg.setAttribute('src', `./img/levantamento/levantamento_${numeroLevantamentoImg}.png`)
const diminuiAlturaDaCaixa = () => {
    if (numeroLevantamentoImg > 9){
        clearInterval(desceImagens)
        textoMeAjuda.innerHTML = "Conseguimos!!"
        return
    }
    if (numeroLevantamentoImg > 1){
        numeroLevantamentoImg --
    }
    levantamentoImg.setAttribute('src', `./img/levantamento/levantamento_${numeroLevantamentoImg}.png`)
}
desceImagens = setInterval(diminuiAlturaDaCaixa, 70)
levantamentoCnt.addEventListener('click', () => {
    if (numeroLevantamentoImg < 10){
        numeroLevantamentoImg += 4;
        textoMeAjuda.innerHTML = "Vamos lá, sei que podemos!"
    }
    if (numeroLevantamentoImg > 10){
        numeroLevantamentoImg = 10
    }

    levantamentoImg.setAttribute('src', `./img/levantamento/levantamento_${numeroLevantamentoImg}.png`)
})

//botoes de habilidade
habilidadeBtn.forEach(habilidade_atual => {
    habilidade_atual.addEventListener('mouseover', selecionaHabilidade)
    function selecionaHabilidade() {
        habilidadeBtn.forEach(atual => {
            atual.classList.remove("active")
        })
        habilidade_atual.classList.add('active')
        let classeAtual = habilidade_atual.classList[1]
        imagemHabilidade.setAttribute("src", `./img/${classeAtual}_art.png`)
        imagemHabilidade.setAttribute("alt", `Imagem que representa a habilidade "${classeAtual}"`)
        if(habilidade_atual.classList.contains(classeAtual)){
            habilidadeDescricaoLista.forEach(descricao_atual => {
                descricao_atual.classList.remove('active_desc')
                if (descricao_atual.classList.contains(`${classeAtual}_desc`)) {
                    descricao_atual.classList.add("active_desc")
                }
            })
        }
    }
})




