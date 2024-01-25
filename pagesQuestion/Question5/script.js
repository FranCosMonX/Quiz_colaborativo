exibirTitulo('h3','Que personagem da turma do Chaves vive cobrando o aluguel do Seu Madruga ?');
exibirOpcoes('r1','Kiko');
exibirOpcoes('r2','Chaves');
exibirOpcoes('r3','Seu Barriga');
exibirOpcoes('r4','Professor Girafales');

function exibirTitulo(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function exibirOpcoes(id,texto){
    let resposta = document.getElementById(id);
    resposta.innerHTML = texto;
}
