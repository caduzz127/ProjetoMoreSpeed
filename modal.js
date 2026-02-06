console.log('Modal script loaded');

const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
console.log(openModal, modal, closeModal);
openModal.addEventListener('click', () => {
    modal.classList.add('ativo');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('ativo');
    }
});