
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






const modalAtendimento = document.getElementById('modal-atendimento');
const openModalAtendimento = document.getElementById('open-modal-atendimento');
const closeModalAtendimento = document.getElementById('close-modal-atendimento');


openModalAtendimento.addEventListener('click', (event) => {
    modalAtendimento.classList.add('ativo');
    document.body.classList.add('modal-aberto');
});

closeModalAtendimento.addEventListener('click', (event) => {
    modalAtendimento.classList.remove('ativo');
    document.body.classList.remove('modal-aberto');
});

window.addEventListener('click', (event) => {
    if (event.target === modalAtendimento) {
        modalAtendimento.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
    }
});




const modalVoip = document.getElementById('modal-voip');
const openModalVoip = document.getElementById('open-modal-voip');
const closeModalVoip = document.getElementById('close-modal-voip');


openModalVoip.addEventListener('click', (event) => {
    modalVoip.classList.add('ativo');
    document.body.classList.add('modal-aberto');
});

closeModalVoip.addEventListener('click', (event) => {
    modalVoip.classList.remove('ativo');
    document.body.classList.remove('modal-aberto');
});

window.addEventListener('click', (event) => {
    if (event.target === modalVoip) {
        modalVoip.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
    }
});






const modalSLA = document.getElementById('modal-SLA');
const openModalSLA = document.getElementById('open-modal-SLA');
const closeModalSLA = document.getElementById('close-modal-SLA');


openModalSLA.addEventListener('click', (event) => {
    modalSLA.classList.add('ativo');
    document.body.classList.add('modal-aberto');
});

closeModalSLA.addEventListener('click', (event) => {
    modalSLA.classList.remove('ativo');
    document.body.classList.remove('modal-aberto');
});

window.addEventListener('click', (event) => {
    if (event.target === modalSLA) {
        modalSLA.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
    }
});