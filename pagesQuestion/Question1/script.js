exibirTitulo('h3','Um século tem quantos anos ?');
exibirOpcoes('r1','70');
exibirOpcoes('r2','100');
exibirOpcoes('r3','1000');
exibirOpcoes('r4','1500');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
