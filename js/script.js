let menu = document.getElementById('menu');

function mostrarMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    }else{
        menu.style.display = "none";
    }
}



function mostrarContato() {
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    }else{
        menu.style.display = "none";
    }
}


let slideAtual = 1;

let listaSlide = ["banner-gb1", "banner-gb2", "banner-gb3","banner-gb4"]

setInterval(slide, 4000)

function slide(){

    console.log("slide Atual", slideAtual)

    if(slideAtual > 0){
        document.querySelector("#carrossel").classList.remove(listaSlide[slideAtual - 1])
    } else if (slideAtual == 0) {
        document.querySelector("#carrossel").classList.remove(listaSlide[(listaSlide.length) - 1])
    }

    document.querySelector('#carrossel').classList.add(listaSlide[slideAtual])

    slideAtual++;

    if(slideAtual > (listaSlide.length) - 1){
        slideAtual = 0;
    }
}