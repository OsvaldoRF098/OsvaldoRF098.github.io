  AOS.init({ duration: 700, once: true, offset: 60 });

  /* botón arriba */
  const btn = document.getElementById('boton-arriba');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  /* efecto de escritura en terminal */
  const text = `Bienvenido a mi portafolio.

Soy Osvaldo Ramírez Flores, Ingeniero en Sistemas Computacionales con formación técnica sólida y amplia participación en competencias de innovación tecnológica a nivel regional y nacional.

Me apasiona desarrollar soluciones tecnológicas con impacto real, especialmente en el área de salud digital e IoT. Soy una persona proactiva, comunicativa y con grandes habilidades para el trabajo en equipo y la resolución de problemas.

Actualmente en búsqueda de oportunidades profesionales para aplicar y expandir mis conocimientos.`;

  let i = 0;
  const el = document.getElementById('typed-text');
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, i < 3 ? 60 : 18);
    }
  }
  /* empieza a escribir cuando la sección es visible */
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { type(); observer.disconnect(); }
  }, { threshold: 0.3 });
  observer.observe(document.getElementById('sobre-mi'));
