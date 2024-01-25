exibirTitulo('h3','Qual a profissão dos Sete Anões ?');
exibirOpcoes('r1','Mineiros');
exibirOpcoes('r2','Lenhadores');
exibirOpcoes('r3','Agricultores');
exibirOpcoes('r4','Pastores');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
