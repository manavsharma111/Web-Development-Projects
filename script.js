// Smooth scrolling
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typewriter effect
const roles = [
  "I'm Manav Sharma",
  "I'm an Electronics Enthusiast",
  "I'm an FPGA Enthusiast",
  "I'm a VLSI Enthusiast",
  "I'm a DSA Enthusiast",
  "I'm a Tech Explorer"
];

const el = document.getElementById('typing-text');
let roleIdx = 0, charIdx = 0, typing = true;

const TYPE_SPEED = 70;
const ERASE_SPEED = 45;
const HOLD_TIME  = 1200;

function tick() {
  const text = roles[roleIdx];

  if (typing) {
    charIdx++;
    el.textContent = text.slice(0, charIdx);
    if (charIdx === text.length) {
      typing = false;
      setTimeout(tick, HOLD_TIME);
      return;
    }
    setTimeout(tick, TYPE_SPEED);
  } else {
    charIdx--;
    el.textContent = text.slice(0, charIdx);
    if (charIdx === 0) {
      typing = true;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(tick, 300);
      return;
    }
    setTimeout(tick, ERASE_SPEED);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  el.textContent = "";
  tick();
});