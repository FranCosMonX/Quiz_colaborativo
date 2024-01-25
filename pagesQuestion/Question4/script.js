exibirTitulo('h3','O que é a Via Láctea ?');
exibirOpcoes('r1','Marca de Leite');
exibirOpcoes('r2','Civilização antiga');
exibirOpcoes('r3','Marca de carro');
exibirOpcoes('r4','Galáxia');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
