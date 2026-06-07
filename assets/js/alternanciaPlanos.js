const premium = document.getElementById('btn-assinaturas');
const planoPremium = document.getElementById('planos-premium-wrapper');

const internet = document.getElementById('btn-internet');
const planoInternet = document.getElementById('planos-internet-wrapper');
const carousel = document.getElementById('carousel-internet-controls');

const dotsInternet = document.getElementById('carousel-internet-controls');


premium.addEventListener('click', (event) => {
    premium.classList.add("ativo");
    premium.classList.remove("inativo")
    planoPremium.classList.remove("inativo");
    planoInternet.classList.remove("ativo");

    
    
    dotsInternet.classList.remove("ativo");

    carousel.classList.add("inativo");

    internet.classList.add("inativo");
    internet.classList.remove("ativo");

});

internet.addEventListener('click', (event) => {
    internet.classList.add("ativo");
    internet.classList.remove("inativo");
    planoInternet.classList.add("ativo");
    planoPremium.classList.add("inativo");

    carousel.classList.add("ativo");
   
    dotsInternet.classList.remove("inativo");

    premium.classList.add("inativo");
    premium.classList.remove("ativo");
});



