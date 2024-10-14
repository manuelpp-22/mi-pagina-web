
document.addEventListener("DOMContentLoaded", function() {
  // 1. Validación del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (nombre === '' || email === '' || mensaje === '') {
          alert('Por favor, completa todos los campos.');
      } else if (!validateEmail(email)) {
          alert('Por favor, introduce un correo válido.');
      } else {
          alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje.`);
          contactForm.reset();
      }
  });

  // 2. Validación del formulario de newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('newsletter-email').value.trim();

      if (email === '') {
          alert('Por favor, introduce un correo.');
      } else if (!validateEmail(email)) {
          alert('Por favor, introduce un correo válido.');
      } else {
          alert('¡Gracias por suscribirte a nuestro boletín!');
          newsletterForm.reset();
      }
  });

  // Función para validar correos electrónicos
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // 3. Efectos al hacer scroll (Scroll Reveal)
  const sections = document.querySelectorAll('.servicio, .carousel-item, .nosotros, .newsletter');
  
  function revealOnScroll() {
      const windowHeight = window.innerHeight;
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          // Si la sección está en el viewport
          if (sectionTop < windowHeight - 100) {
              // Si la sección aún no tiene la clase visible, la añadimos
              if (!section.classList.contains('visible')) {
                  section.classList.add('visible');
              }
          }
      });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Para revelar elementos en la primera carga

  // 4. Carrusel de productos con controles
  const carousel = document.querySelector('.carousel');
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
  });

  carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
  });

  carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3; // Velocidad de desplazamiento
      carousel.scrollLeft = scrollLeft - walk;
  });

  // Efecto hover para botones
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', () => {
          button.style.transform = 'scale(1)';
      });
  });
});
