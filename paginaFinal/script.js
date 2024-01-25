function exibirResultado(){
    
        let resultado = verificarResultado();
        
        
    if(resultado >=7){
        let titulo = document.getElementById('final');
        titulo.innerHTML = 'Você Conseguiu ser Aprovado'
    }
    else{
        let titulo = document.getElementById('final');
        titulo.innerHTML = 'Você não Conseguiu, tente novamente! Clique em Reiniciar'
    }
}
