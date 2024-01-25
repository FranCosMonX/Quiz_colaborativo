exibirTitulo('h3','Quantas folhas tem um trevo da sorte ?');
exibirOpcoes('r1','Três');
exibirOpcoes('r2','Quatro');
exibirOpcoes('r3','Cinco');
exibirOpcoes('r4','Seis');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
