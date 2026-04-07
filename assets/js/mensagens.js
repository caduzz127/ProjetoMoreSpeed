const telefoneSuporte = "5521965655662";
const telefoneInstalacao = "5521965615909";
const telefoneSuporteCorporativo = "5521985908839";


function enviarMensagemWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validar se todos os campos foram preenchidos
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    
    const textoMensagem = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Meu telefone é ${telefone}. Mensagem: ${mensagem}`;

   
    const url = `https://wa.me/${telefoneSuporte}?text=${encodeURIComponent(textoMensagem)}`;
    window.open(url, '_blank');
}



const plano200 = "Eu gostaria de Saber mais sobre o Plano de 200 Megas. Estou vindo pelo site";
const plano300 = "Eu gostaria de Saber mais sobre o Plano de 300 Megas. Estou vindo pelo site";
const plano450 = "Eu gostaria de Saber mais sobre o Plano de 450 Megas. Estou vindo pelo site";
const plano800 = "Eu gostaria de Saber mais sobre o Plano de 800 Megas. Estou vindo pelo site";

function AssinarPlano200() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(plano200)}`;
    window.open(url, '_blank');
}

function AssinarPlano300() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(plano300)}`;
    window.open(url, '_blank');
}

function AssinarPlanoAvancado() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(plano450)}`;
    window.open(url, '_blank');
}

function AssinarPlanoPremium() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(plano800)}`;
    window.open(url, '_blank');
}


function paginaCliente() {
    window.location.href = "http://atendimento.morespeed.com.br:8000/accounts/central/login";
}

function enviarMensagemWhatsAppCorporativo() {
    const nomeDaEmpresa = document.getElementById('nomeC').value;
    const email = document.getElementById('emailC').value;
    const telefone = document.getElementById('telefoneC').value;
    const mensagem = document.getElementById('mensagemC').value;
    if (!nomeDaEmpresa || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    const mensagemCorporativo = `Olá, gostaria de falar com um especialista sobre os planos corporativos. Estou vindo pelo site.\nNome da Empresa: ${nomeDaEmpresa}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const url = `https://wa.me/${telefoneSuporteCorporativo}?text=${encodeURIComponent(mensagemCorporativo)}`;
    window.open(url, '_blank');
}

function enviarMensagemLinkDedicado() {
    const url = `https://wa.me/${telefoneSuporteCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o Link Dedicado.")}`;
    window.open(url, '_blank');
}
function enviarMensagemAtendimento(){
    const url = `https://wa.me/${telefoneSuporteCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o Atendimento Especializado da Empresa.")}`;
    window.open(url, '_blank');
}
function enviarMensagemVoIP() {
    const url = `https://wa.me/${telefoneSuporteCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o VoIP.")}`;
    window.open(url, '_blank');
}
function enviarMensagemSLA() {
    const url = `https://wa.me/${telefoneSuporteCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o SLA garantido.")}`;
    window.open(url, '_blank');
}