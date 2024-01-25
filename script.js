let vetor= [];
let n;
function chamar(){
   return ordem();
   
    
}
function  gOrdemQuestoesAleatorio(){
    let n1 = parseInt(Math.random() *10 +1 ); 
    return n1; 

}
function receberOrdemQuestoesValidacao(){
    let n2 = gOrdemQuestoesAleatorio();
    if(vetor.includes(n2)){
        chamar()
    }
    else{
        vetor.push(n2);
        return n2;
    }


}
function ordem(){
     n =0;
     n = receberOrdemQuestoesValidacao();

    if(n == 1){
        return window.location.href="pagesQuestion/Question1/index.html"
    }
    else if(n ==2){
        return window.location.href="pagesQuestion/Question2/index.html"
    }
    else if(n ==3){
        return window.location.href="pagesQuestion/Question3/index.html"
    }
    else if(n ==4){
        return window.location.href="pagesQuestion/Question4/index.html"
    }
    else if(n ==5){
        return window.location.href="pagesQuestion/Question5/index.html"
    }
    else if(n ==6){
        return window.location.href="pagesQuestion/Question6/index.html"
    }
    else if(n ==7){
        return window.location.href="pagesQuestion/Question7/index.html"
    }
    else if(n ==8){
        return window.location.href="pagesQuestion/Question8/index.html"
    }
    else if(n ==9){
        return window.location.href="pagesQuestion/Question9/index.html"
    }
    else if(n ==10){
        return window.location.href="pagesQuestion/Question10/index.html"
    }
    else{
        return window.location.href="paginaFinal/index.html"
        
    }
}