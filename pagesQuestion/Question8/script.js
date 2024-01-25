exibirTitulo('h3','Que objeto usado na chuva o Pinguim do Batman usa como arma ?');
exibirOpcoes('r1','Guarda-chuva');
exibirOpcoes('r2','Chapéu');
exibirOpcoes('r3','Galocha');
exibirOpcoes('r4','Capa');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
