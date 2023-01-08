function selecionarPrato(pratoClickado){ //pegar o prato que foi clickado e trazer para o JS (usando o this)

    //pegar o elemento que foi selecionado anteriormente
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');

    //antes de remover, vou verificar se pratoSelecionadoAnteriormente não é null
    if (pratoSelecionadoAnteriormente !== null){
        //remover a classe selecionado dele
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    //adiconar a classe selecionado no elemento que foi clickado
    pratoClickado.classList.add('selecionado');
}

function selecionarBebida(bebidaClickada){ //pegar a bebida que foi clickada (this)

    //pegar a bebida que foi selecionado anteriormente
    const bebidaSelecionadaAnteriormente = document.querySelector('.bebidas .selecionado');

    //antes de remover 'selecionado', verificar se existe uma bebida selecionada anteriormente
    if(bebidaSelecionadaAnteriormente !== null){
        //remover a classe 'selecionado' da bebida selecionada anteriormente
        bebidaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    //marcar como selecionada, adicionando a classe 'selecionado'
    bebidaClickada.classList.add('selecionado');
}

function selecionarSobremesa(sobremesaClickada){ //pegar a sobremesa que foi clickada (this)

    //pegar a sobremesa que foi selecionado anteriormente
    const sobremesaSelecionadaAnteriormente = document.querySelector('.sobremesas .selecionado');

    //antes de remover 'selecionado', verificar se existe uma sobremesa selecionada anteriormente
    if(sobremesaSelecionadaAnteriormente !== null){
        //remover a classe 'selecionado' da sobremesa selecionada anteriormente
        sobremesaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    //marcar como selecionada, adicionando a classe 'selecionado'
    sobremesaClickada.classList.add('selecionado');
}