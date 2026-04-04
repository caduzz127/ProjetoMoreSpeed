// abrir modal
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-modal');
    document.getElementById(id).classList.add('ativo');
  });
}); 

// fechar modal
document.querySelectorAll('.modal-overlay .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('ativo');
  });
});

// clique fora
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('ativo');
    }
  });
});