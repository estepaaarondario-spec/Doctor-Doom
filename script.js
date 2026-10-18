/* ===== 1. MENÚ DE CELULAR: abre y cierra el menú ===== */
const botonMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
botonMenu.addEventListener('click', () => menu.classList.toggle('abierto'));
// Al elegir una sección, el menú se cierra
menu.addEventListener('click', () => menu.classList.remove('abierto'));

/* ===== 2. ANIMACIÓN AL APARECER =====
   Las secciones y tarjetas aparecen suavemente al hacer scroll. */
const elementos = document.querySelectorAll('.section-title, .card, .quote-section');
elementos.forEach(el => el.classList.add('oculto'));
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
elementos.forEach(el => observador.observe(el));

/* ===== 3. IMAGEN FALTANTE =====
   Si una imagen no existe, se oculta y se ve el fondo verde de la tarjeta. */
document.querySelectorAll('.image-placeholder img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});
