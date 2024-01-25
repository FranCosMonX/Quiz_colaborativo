let vetor= [];

function  gOrdemQuestoesAleatorio(){
    let n = parseInt(Math.random() *10 +1 ); 
    return n; 

}
function receberOrdemQuestoesValidacao(){
    let n = gOrdemQuestoesAleatorio();
    if(vetor.includes(n)){
        receberOrdemQuestoesValidacao();
    }
    else{
        vetor.push(n);
        return n;
    }
}