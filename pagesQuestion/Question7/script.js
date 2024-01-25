exibirTitulo('h3','Que personagem dos quadrinhos usa um coelho como arma e tem dentes grandes ?');
exibirOpcoes('r1','Magali');
exibirOpcoes('r2','Cebolinha');
exibirOpcoes('r3','Cascão');
exibirOpcoes('r4','Mônica');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
