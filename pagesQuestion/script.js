function teste(e) {
    var id = e.id;

    var elemento = document.getElementById(id);
    var valor = elemento.getAttribute("value");
    if (valor === 'true') {
        let pontos = parseInt(sessionStorage.getItem('pontos'));
        pontos = pontos + 1;
        sessionStorage.setItem('pontos', pontos)
        elemento.style.backgroundColor = "green";
    } else {
        elemento.style.backgroundColor = "red";
    }

    console.log(sessionStorage.getItem('pontos'));
}
function exibir(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}