exibirTitulo('h3','Que fruta é ressecada para se tornar uma ameixa seca ?');
exibirOpcoes('r1','Ameixa');
exibirOpcoes('r2','Uva');
exibirOpcoes('r3','Pêssego');
exibirOpcoes('r4','Melão');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
