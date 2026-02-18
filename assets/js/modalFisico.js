// MODAL 1 - Plano Família 1
const openModal = document.getElementById('open-modal1');
const modal = document.getElementById('modal1');
const closeModal = document.getElementById('close-modal1');

openModal.addEventListener('click', (event) => {
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
  


  // MODAL 2 - Plano Família 2
const openModal2 = document.getElementById('open-modal2');
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('close-modal2');

openModal2.addEventListener('click', () => {
  modal2.classList.add('ativo');
});


closeModal2.addEventListener('click', () => {
  modal2.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.classList.remove('ativo');
  }
});


// MODAL 3 - Plano Corporativo
const openModal3 = document.getElementById('open-modal3');
const modal3 = document.getElementById('modal3');
const closeModal3 = document.getElementById('close-modal3');

openModal3.addEventListener('click', () => {
  modal3.classList.add('ativo');
});

closeModal3.addEventListener('click', () => {
  modal3.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.classList.remove('ativo');
  }
});





// MODAL 4 - Plano Corporativo
const openModal4 = document.getElementById('open-modal4');
const modal4 = document.getElementById('modal4');
const closeModal4 = document.getElementById('close-modal4');

openModal4.addEventListener('click', () => {
  modal4.classList.add('ativo');
});

closeModal4.addEventListener('click', () => {
  modal4.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.classList.remove('ativo');
  }
});





















// MODAIS DO CORPORATIVO AGORA APENAS INFORMAÇÕES
const openModalF = document.getElementById('open-modalFi');
const modalF = document.getElementById('modalFi');
const closeModalF = document.getElementById('close-modalFi');

console.log(openModalF, modalF, closeModalF);

openModalF.addEventListener('click', () => {
  modalF.classList.add('ativo');
});

closeModalF.addEventListener('click', () => {
  modalF.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modalF) {
    modalF.classList.remove('ativo');
  }
});