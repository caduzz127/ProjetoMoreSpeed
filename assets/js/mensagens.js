const telefoneSuporte = "5521965655662";
const telefoneInstalacao = "5521965615909";
const telefoneSuporteCorporativo = "5521985908839";
const telefoneAtendimentoCorporativo = "5521985908839";

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


//Planos Residenciais
const planoIndividual = "Eu gostaria de Saber mais sobre o Plano Individual. Estou vindo pelo site";
const planoFamilia = "Eu gostaria de Saber mais sobre o Plano Familia. Estou vindo pelo site";
const planoFamiliaPlus = "Eu gostaria de Saber mais sobre o Plano Familia+. Estou vindo pelo site";

//Planos Performance
const planoHomeOffice = "Eu gostaria de Saber mais sobre o Plano de 1 GIGA do Home Office. Estou vindo pelo site";
const planoGamer = "Eu gostaria de Saber mais sobre o Plano Gamer Normal de 600 Mega. Estou vindo pelo site";
const planoGamerPlus = "Eu gostaria de Saber mais sobre o Plano Gamer Plus de 800 Mega. Estou vindo pelo site";
const planoStreamer = "Eu gostaria de Saber mais sobre o Plano Streamer. Estou vindo pelo site";

function AssinarPlanoIndividual() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoIndividual)}`;
    window.open(url, '_blank');
}

function AssinarPlanoFamilia() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoFamilia)}`;
    window.open(url, '_blank');
}

function AssinarPlanoFamiliaPlus() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoFamiliaPlus)}`;
    window.open(url, '_blank');
}


//PLANOS DE PERFORMANCE

function AssinarPlanoHomeOffice() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoHomeOffice)}`;
    window.open(url, '_blank');
}
function AssinarPlanoGamer() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoGamer)}`;
    window.open(url, '_blank');
}
function AssinarPlanoGamerPlus() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoGamerPlus)}`;
    window.open(url, '_blank');
}
function AssinarPlanoStreamer() {
    const url = `https://wa.me/${telefoneInstalacao}?text=${encodeURIComponent(planoStreamer)}`;
    window.open(url, '_blank');
}

//PAGINA DO CLIENTE
function paginaCliente() {
    window.location.href = "http://atendimento.morespeed.com.br:8000/accounts/central/login";
}

//MENSAGEM PARA O CORPORATIVO
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
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent(mensagemCorporativo)}`;
    window.open(url, '_blank');
}

function enviarMensagemLinkDedicado() {
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o Link Dedicado. Estou vindo pelo site.")}`;
    window.open(url, '_blank');
}
function enviarMensagemAtendimento(){
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o Atendimento Especializado da Empresa. Estou vindo pelo site.")}`;
    window.open(url, '_blank');
}
function enviarMensagemVoIP() {
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o VoIP. Estou vindo pelo site.")}`;
    window.open(url, '_blank');
}
function enviarMensagemSLA() {
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre o SLA garantido. Estou vindo pelo site.")}`;
    window.open(url, '_blank');
}


function enviarMensagemNamorados() {
    const url = `https://wa.me/${telefoneAtendimentoCorporativo}?text=${encodeURIComponent("Gostaria de informações sobre a promoção de Namorados. Estou vindo pelo site.")}`;
    window.open(url, '_blank');
}