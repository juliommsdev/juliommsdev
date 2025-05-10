const bug = document.getElementById('bug');
const scoreEl = document.getElementById('score');
const game = document.querySelector('.game');
let score = 0;
let speed = 1000;

function moveBug() {
  const x = Math.random() * (game.clientWidth - 50);
  const y = Math.random() * (game.clientHeight - 50);
  bug.style.left = `${x}px`;
  bug.style.top = `${y}px`;
}

function increaseScore() {
  score++;
  scoreEl.textContent = score;
  speed = Math.max(200, speed - 30); // aumenta a dificuldade
  clearInterval(timer);
  timer = setInterval(moveBug, speed);
  moveBug();
}

bug.addEventListener('click', increaseScore);

let timer = setInterval(moveBug, speed);
