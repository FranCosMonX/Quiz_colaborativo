exibirTitulo('h3','Quem é o pai da Chiquinha ?');
exibirOpcoes('r1','Girafales');
exibirOpcoes('r2','Seu Barriga');
exibirOpcoes('r3','Seu Madruga');
exibirOpcoes('r4','Nhonho');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
