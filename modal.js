console.log('Modal script loaded');
const openModal = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelectorAll('.close-modal');
console.log('Close Modal Buttons:', closeModal);

openModal.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('ativo');
  });
});

closeModal.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('ativo');
  });
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('ativo');
  }
});
