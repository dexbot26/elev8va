/* =============================================
   Elev8va — main.js
   ============================================= */

/* ── Hero visual responsive show/hide ── */
function checkHeroVisual() {
  const el = document.getElementById('hero-visual');
  if (el) el.style.display = window.innerWidth >= 1024 ? 'block' : 'none';
}
checkHeroVisual();
window.addEventListener('resize', checkHeroVisual);

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Fade-up on scroll ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Contact form submission ── */
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}
