window.onload = () => {
  setTimeout(() => {
    const loader = document.getElementById("loaderContainer");
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      document.getElementById("mainTitle").classList.add("visible");
      document.getElementById("mainSubtitle").classList.add("visible");
      document.getElementById("mainSlogan").classList.add("visible");
    }, 800);
  }, 2000);
};

document.getElementById("contactBtn").onclick = function () {
  document.getElementById("formModal").classList.add("show");
};

function cerrarModal() {
  document.getElementById("formModal").classList.remove("show");
}

const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(207,182,255,0.08)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}

resize();
createParticles();
drawParticles();
window.addEventListener("resize", () => {
  resize();
  createParticles();
});

