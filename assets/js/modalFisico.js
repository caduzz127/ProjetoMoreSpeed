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










//Modal para os Planos de Internet
const openModalInternet300 = document.getElementById('open-modal-plano-de-300');
const modalInternet300 = document.getElementById('modal-plano-de-300');
const closeModalInternet300 = document.getElementById('close-modal-plano-de-300');


openModalInternet300.addEventListener('click', () => {
  modalInternet300.classList.add('ativo');
});

closeModalInternet300.addEventListener('click', () => {
  modalInternet300.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modalInternet300) {
    modalInternet300.classList.remove('ativo');
  }
});




const openModalInternet450 = document.getElementById('open-modal-plano-de-450');
const modalInternet450 = document.getElementById('modal-plano-de-450');
const closeModalInternet450 = document.getElementById('close-modal-plano-de-450');

console.log(openModalInternet450,modalInternet450,closeModalInternet450);
openModalInternet450.addEventListener('click', () => {
  modalInternet450.classList.add('ativo');
});

closeModalInternet450.addEventListener('click', () => {
  modalInternet450.classList.remove('ativo');
});

window.addEventListener('click', (event) => {
  if (event.target === modalInternet450) {
    modalInternet450.classList.remove('ativo');
  }
});