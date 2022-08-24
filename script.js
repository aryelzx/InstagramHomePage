let time = 3500, //time
    currentImageIndex = 0, //contador da img
    images = document.querySelectorAll("#slider img") //puxando as img
    max = images.length; //todas as img, limite maximo

function nextImage(){ //funcao de trocar a imagem

    images [currentImageIndex] 
        .classList.remove("selected") //remove a classe do elemento atual e faz o loop

    currentImageIndex++ //0 + 1, add a classe a prox img

    if(currentImageIndex >= max) //condicao para nao parar nas 4 imgs e comecar um loop ate a ultima imagem
        currentImageIndex = 0

    images [currentImageIndex] //adicionar uma classe para proxima imagem "selected"
        .classList.add("selected")
}

function start(){
    setInterval(() => { //executa uma funcao a cada um momento
        //troca de imagem
        nextImage() //funcao de trocar a imagem
    }, time /*momento*/)

}
window.addEventListener("load",start) //startar depois do loading da pag