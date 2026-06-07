const premium = document.getElementById('btn-assinaturas');
const internet = document.getElementById('btn-internet');


const planoPremium = document.getElementById('planos-premium-wrapper');

const planoInternet = document.getElementById('planos-internet-wrapper');
const carousel = document.getElementById('carousel-internet-controls');

const dotsInternet = document.getElementById('carousel-internet-controls');


premium.addEventListener('click', (event) => {
    premium.classList.add("ativo");
    premium.classList.remove("inativo")

    internet.classList.remove("ativo");
    internet.classList.add("inativo");


    planoPremium.classList.remove("inativo");
    planoPremium.classList.add("ativo");
    
    planoInternet.classList.remove("ativo");
    planoInternet.classList.add("inativo");
    
    
    dotsInternet.classList.remove("ativo");

    carousel.classList.add("inativo");


});

internet.addEventListener('click', (event) => {
    internet.classList.add("ativo");
    internet.classList.remove("inativo");

    premium.classList.add("inativo");
    
    planoPremium.classList.add("inativo");
    planoPremium.classList.remove("ativo");

    planoInternet.classList.add("ativo");
    planoInternet.classList.remove("inativo");
    

    carousel.classList.add("ativo");
   
    dotsInternet.classList.remove("inativo");

});



