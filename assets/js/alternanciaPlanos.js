const premium = document.getElementById('btn-assinaturas');
const planoPremium = document.getElementById('planos-premium');

const internet = document.getElementById('btn-internet');
const planoInternet = document.getElementById('planos-internet');

premium.addEventListener('click', (event) =>{
    premium.classList.add("ativo");
    premium.classList.remove("inativo")
    planoPremium.classList.remove("inativo");
    planoInternet.classList.remove("ativo");
    
    internet.classList.add("inativo");
    internet.classList.remove("ativo");
   
});

internet.addEventListener('click', (event)=>{
    internet.classList.add("ativo");
    internet.classList.remove("inativo");
    planoInternet.classList.add("ativo");
    planoPremium.classList.add("inativo");

    premium.classList.add("inativo");
    premium.classList.remove("ativo");
});



