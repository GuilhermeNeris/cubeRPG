

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
} 

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 6000); // Transição automática a cada 6 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicie a transição automática quando a página carregar
window.onload = () => {
    startAutoSlide();
};

// Pare a transição automática quando o usuário interagir com os controles
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    stopAutoSlide();
    moveCarousel(-1);
    startAutoSlide();
});

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    stopAutoSlide();
    moveCarousel(1);
    startAutoSlide();
});

 function cubePlay(elementId) {
        var elemento = document.getElementById('CubePLaYlogo');
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

 function sobremim(){
   window.location.href = 'SobreMim.html';
 }

 function login(){
    window.location.href = 'telaCadastro.html';
 }

 function mightyblade(){
    window.location.href = 'https://coisinhaverde.com.br/jogos/portfolio/mighty-blade-rpg/';
 }

 function nebula(){
    window.location.href = 'https://coisinhaverde.com.br/jogos/portfolio/nebula/';
 }

 function ordemParanormal(){
    window.location.href = 'https://ordemparanormal.com.br/';
 }

 function DeD(){
    window.location.href = 'https://dnd.wizards.com/pt-BR';
 }

 function diablo3(){
    window.location.href = 'https://us.diablo3.blizzard.com/pt-br/';
 }

 function darksouls(){
    window.location.href = 'https://pt.wikipedia.org/wiki/Dark_Souls';
 }

 function zelda(){
    window.location.href = 'https://pt.wikipedia.org/wiki/The_Legend_of_Zelda';
 }

 function skyrim(){
    window.location.href = 'https://pt.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim';
 }

 function theDragonPrince(){
    window.location.href = 'https://www.netflix.com/br/title/80212245';
 }

 function Warcraft(){
    window.location.href = 'https://www.primevideo.com/-/pt/detail/Warcraft---O-Primeiro-Encontro-De-Dois-Mundos/0MF5X5LYVG0V8RYL6TB2F2HETR';
 }

 function VoxMachima(){
    window.location.href = 'https://www.primevideo.com/-/pt/detail/A-Lenda-de-Vox-Machina/0O1MH4HMS00EO6XP75LWG5TB89';
 }

 function DeDrebeldes(){
    window.location.href = 'https://www.primevideo.com/dp/amzn1.dv.gti.038bb834-946e-4426-9afa-ee153167b6a7?autoplay=0&ref_=atv_cf_strg_wb';
 }

 function biblioteca(elementId) {
   var elemento = document.getElementById('FrameBiblioteca');
   if (elemento) {
       elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
}


