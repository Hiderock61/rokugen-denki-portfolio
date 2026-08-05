document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const links = nav.querySelectorAll('a');

  const setMenuOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
    nav.classList.toggle('open', open);
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
});
