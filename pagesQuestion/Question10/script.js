exibirTitulo('h3','Por último, quantos centavos tem um real ?');
exibirOpcoes('r1','Dez');
exibirOpcoes('r2','Mil');
exibirOpcoes('r3','Cem');
exibirOpcoes('r4','Cinquenta');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
