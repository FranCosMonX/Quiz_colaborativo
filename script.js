let vetor = [];
let pontos = 0;

function chamar() {
    window.location = ordem();

}

function gOrdemQuestoesAleatorio() {
    let n1 = parseInt(Math.random() * 10 + 1);
    return n1;

}
function receberOrdemQuestoesValidacao() {
    let n2 = gOrdemQuestoesAleatorio();
    if (vetor.includes(n2)) {
        return 0;
    }
    else {
        vetor.push(n2);
        return n2;
    }


}
function ordem() {
    let n = 0;
    n = receberOrdemQuestoesValidacao();

    if (n == 0) {
        chamar();
    }

    if (n == 1) {
        return "Question1.html"
    }
    else if (n == 2) {
        return "Question2.html"
    }
    else if (n == 3) {
        return "Question3.html"
    }
    else if (n == 4) {
        return "Question4.html"
    }
    else if (n == 5) {
        return "Question5.html"
    }
    else if (n == 6) {
        return "Question6.html"
    }
    else if (n == 7) {
        return "/Question7.html"
    }
    else if (n == 8) {
        return "Question8.html"
    }
    else if (n == 9) {
        return "Question9.html"
    }
    else if (n == 10) {
        return "Question10.html"
    }
    else {
        return "paginaFinal/index.html"

    }
}

function adiciona_pontos() {
    pontos += 1;
}

//qualquer elemento que chamar essa função, terá todo os seus parametros no (e). Basta especificar "this" no html.
/*
    Como estamos fazendo uma questão por html com perguntas já definidas, nós saberemos qual a resposta correta.
        - O parametro value nos informa se a resposta é a correta ou a errada.
    
    o HTML é visto pelo js como document.
    Para pegar o elementos de um html, usamos o id ou class que construimos ao criar uma tag
    Ah duas formas de pegar os elementos
        - para pegar algum elemento com id podemos usar
        ex: document.getElementById('nomeDoIdSemJogoDaVelha') ou
        document.querySelector('#nomedoIdComJogoDaVelha')
    Já o class, podemos pegar apenas usando o document.querySelector('.nomeDoClassComPontoFinal')

    Note que o querySelector é mais geral. Se você não identificar que é um class (.) ou id (#) ele ira procurar por
    tags HTML. exemplo document.querySelector('div')
*/
function verifica_resultado(e) { //essa função é chamada apenas nas questões
    //como o (e) é toda a tag que acionou a função verifica_resultado, posso pegar o value que atribuimos no html, o mesmo vale para mudar o estilo
    //e/ou pegar o id dessa tag

    //pegando o id da tag e
    let id = e.id; //note que se não estivessemos passando a tag la no html, teriamos que saber o id ou class para poder usar uma das opções citadas anteriormente
    console.log(e.id);
    let atributoID = e.getAttribute("id") //seria o mesmo que pegar o atributo id por este meio
    console.log(atributoID)

    //note que este comando e.value não funciona como o id
    let value = e.value;
    console.log(value)

    //>>>>>> logica da função
    //por segurança, vamos capturar o parametro do elemento usando o getAttribute
    let valor = e.getAttribute("value"); //me retorna uma string que é o conteudo do atributo value da tag do html que chamou esta função
    if (valor == "true") {
        adiciona_pontos();
        console.log("acertou");
        //adiciona o estilo no elemento (e) para indicar acerto
    } else {
        console.log("errou");
        //adiciona o estilo no elemento (e) para indicar erro
    }
}

//tarefa, modifique o html da questão 8, 9 e 10 para usarem esta função para fazer a verificação das respostas
//assim como esta sendo feita nas demais