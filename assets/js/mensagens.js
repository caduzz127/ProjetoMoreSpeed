 const telefoneSuporte = "5521965655662";



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

        // Montar mensagem formatada para WhatsApp
        const textoMensagem = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Meu telefone é ${telefone}. Mensagem: ${mensagem}`;

        // Abrir WhatsApp com a mensagem
        const url = `https://wa.me/${telefoneSuporte}?text=${encodeURIComponent(textoMensagem)}`;
        window.open(url, '_blank');
    }


    const telefoneInstalacao = "5521965615909";
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