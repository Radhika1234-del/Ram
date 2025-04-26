// Very simple confetti using canvas
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    radius: Math.random() * 6 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() * 3 + 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(draw);
}

draw();
