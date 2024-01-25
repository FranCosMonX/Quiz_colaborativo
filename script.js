let vetor= [];

function chamar(){
    window.location= ordem();   
    
}

function  gOrdemQuestoesAleatorio(){
    let n1 = parseInt(Math.random() *10 +1 ); 
    return n1; 

}
function receberOrdemQuestoesValidacao(){
    let n2 = gOrdemQuestoesAleatorio();
    if(vetor.includes(n2)){
        return 0;
    }
    else{
        vetor.push(n2);
        return n2;
    }


}
function ordem(){
     let n =0;
     n = receberOrdemQuestoesValidacao();

    if( n == 0){
        chamar();
     }

    if(n == 1){
        return "Question1.html"
    }
    else if(n ==2){
        return "Question2.html"
    }
    else if(n ==3){
        return "Question3.html"
    }
    else if(n ==4){
        return "Question4.html"
    }
    else if(n ==5){
        return "Question5.html"
    }
    else if(n ==6){
        return "Question6.html"
    }
    else if(n ==7){
        return "/Question7.html"
    }
    else if(n ==8){
        return "Question8.html"
    }
    else if(n ==9){
        return "Question9.html"
    }
    else if(n ==10){
        return "Question10.html"
    }
    else{
        return "paginaFinal/index.html"
        
    }
}

