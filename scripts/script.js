let tituloPrato;
let tituloBebida;
let tituloSobremesa;

function selecionarPrato(pratoClickado, seletorTitulo){ //pegar o prato que foi clickado e trazer para o JS (usando o this)

    //pegar o elemento que foi selecionado anteriormente
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');

    //antes de remover, vou verificar se pratoSelecionadoAnteriormente não é null
    if (pratoSelecionadoAnteriormente !== null){
        //remover a classe selecionado dele
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    //adiconar a classe selecionado no elemento que foi clickado
    pratoClickado.classList.add('selecionado');

    //pegar titulo do prato
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');

    //pegar o texto que está no elemento
    tituloPrato = elementoTitulo.innerHTML;

    ativarBotaoFecharPedido();
}

function selecionarBebida(bebidaClickada, seletorTitulo){ //pegar a bebida que foi clickada (this)

    //pegar a bebida que foi selecionado anteriormente
    const bebidaSelecionadaAnteriormente = document.querySelector('.bebidas .selecionado');

    //antes de remover 'selecionado', verificar se existe uma bebida selecionada anteriormente
    if(bebidaSelecionadaAnteriormente !== null){
        //remover a classe 'selecionado' da bebida selecionada anteriormente
        bebidaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    //marcar como selecionada, adicionando a classe 'selecionado'
    bebidaClickada.classList.add('selecionado');

    //pegar o titulo
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');

    //pegar o texto que está no elemento
    tituloBebida = elementoTitulo.innerHTML;

    ativarBotaoFecharPedido();
}

function selecionarSobremesa(sobremesaClickada, seletorTitulo){ //pegar a sobremesa que foi clickada (this)

    //pegar a sobremesa que foi selecionado anteriormente
    const sobremesaSelecionadaAnteriormente = document.querySelector('.sobremesas .selecionado');

    //antes de remover 'selecionado', verificar se existe uma sobremesa selecionada anteriormente
    if(sobremesaSelecionadaAnteriormente !== null){
        //remover a classe 'selecionado' da sobremesa selecionada anteriormente
        sobremesaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    //marcar como selecionada, adicionando a classe 'selecionado'
    sobremesaClickada.classList.add('selecionado');

    //pegar o titulo
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');

    //pegar o texto que está no elemento
    tituloSobremesa = elementoTitulo.innerHTML;

    ativarBotaoFecharPedido();
}

function ativarBotaoFecharPedido(){
    //se o prato estiver selecionado
    if(tituloPrato !== undefined){
        //se a bebida estiver selecionada
        if(tituloBebida !== undefined) {
            //se a sobremesa estiver selecionada
            if (tituloSobremesa !== undefined){                
                // pegar o botão e trazer para o javascript
                const botao = document.querySelector('.fazer-pedido');
                // adcionar a classe selecionado nesse botao adicionando a classe 'ativo'
                botao.classList.add('ativo');
                // trocar o texto do botão para 'Fechar Pedido'
                botao.innerHTML = 'Fechar pedido';
            }
        }
    }
}