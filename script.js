window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in-up').forEach((element) => {
    element.classList.add('visible');
  });
});


const bookingBtn = document.getElementById('bookingBtn');
const backBtn = document.getElementById('backBtn');
const bookingSection = document.getElementById('bookingSection');

function openBooking() {
  bookingSection.classList.add('show');
  bookingSection.setAttribute('aria-hidden', 'false');
}

function closeBooking() {
  bookingSection.classList.remove('show');
  bookingSection.setAttribute('aria-hidden', 'true');
}

if (bookingBtn && backBtn && bookingSection) {
  bookingBtn.addEventListener('click', openBooking);
  backBtn.addEventListener('click', closeBooking);
}

const tabs = Array.from(document.querySelectorAll('.tab-btn'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

function activateTab(tabButton) {
  const target = tabButton.dataset.tab;

  tabs.forEach((button) => {
    const selected = button === tabButton;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.setAttribute('tabindex', selected ? '0' : '-1');
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `tab-${target}`);
  });
}

tabs.forEach((tab, index) => {
  tab.setAttribute('tabindex', index === 0 ? '0' : '-1');

  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (event) => {
    let nextIndex = index;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex !== index) {
      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    }
  });
});

const canvas = document.querySelector('.particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 70; i += 1) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.8,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(207, 182, 255, 0.12)';
    ctx.fill();

    particle.x += particle.dx;
    particle.y += particle.dy;

    if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
  });

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});
