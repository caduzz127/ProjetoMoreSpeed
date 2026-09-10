// Abre o modal correto com base no data-modal do botão clicado
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modal);
        if (modal) {
            modal.classList.add('ativo');
            document.body.classList.add('modal-aberto');
        }
    });
});

// Fecha ao clicar no botão X
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modal);
        if (modal) {
            modal.classList.remove('ativo');
            document.body.classList.remove('modal-aberto');
        }
    });
});

// Fecha ao clicar fora do modal
window.addEventListener('click', (event) => {
    const modalAtivo = document.querySelector('.modal-overlay.ativo');
    if (modalAtivo && event.target === modalAtivo) {
        modalAtivo.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
    }
});