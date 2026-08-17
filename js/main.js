/* ==========================================================
   Nordic Equipment Welding – main.js
   ========================================================== */

// ── Fade-up on scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// ── Contact form handler ──
function handleSubmit(event) {
  event.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Fyll i namn, e-post och projektbeskrivning.');
    return;
  }

  // TODO: Replace with real form submission (e.g. Formspree, EmailJS, or your own backend)
  console.log('Form submitted:', { name, email, message });
  alert('Tack! Vi återkommer inom 24 timmar.');
}
