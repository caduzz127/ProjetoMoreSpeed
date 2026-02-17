document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburguer');
  const nav = document.getElementById('nav');
  if (!burger || !nav) return;

  const menuLinks = nav.querySelectorAll('a');

  function closeMenu() {
    nav.classList.remove('open');
    burger.classList.remove('active');
  }

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('pageshow', closeMenu);
});
