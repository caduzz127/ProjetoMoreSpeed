
const modalDedicado = document.getElementById('modal-dedicado');
const openModalDedicado = document.getElementById('open-modal-dedicado');
const closeModalDedicado = document.getElementById('close-modal-dedicado');
console.log(modalDedicado, openModalDedicado, closeModalDedicado);
openModalDedicado.addEventListener('click', (event) => {
    modalDedicado.classList.add('ativo');
    document.body.classList.add('modal-aberto');
});

closeModalDedicado.addEventListener('click', (event) => {
    modalDedicado.classList.remove('ativo');
    document.body.classList.remove('modal-aberto');
});

window.addEventListener('click', (event) => {
    if (event.target === modalDedicado) {
        modalDedicado.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
    }
});
