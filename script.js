const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Dimensions du canvas
const width = 20;
const height = 20;
const blockSize = 20;

// Initialisation du serpent
let snake = [{x: 10, y: 10}];
let direction = 'right';

// Nourriture
let food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)};

// Fonction pour dessiner le jeu
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessine la nourriture
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);

  // Dessine le serpent
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
  });
}

// Fonction pour mettre à jour le jeu
function update() {
  // Met à jour la position de la tête du serpent
  let head = {x: snake[0].x, y: snake[0].y};
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
  }

  // Vérifie si le serpent a mangé de la nourriture
  if (head.x == food.x && head.y == food.y) {
    snake.unshift(head);
    food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)};
  } else {
    snake.pop();
    snake.unshift(head);
  }

  // Vérifie si le serpent est sorti du plateau ou s'il s'est mordu la queue
  if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height || collision(head)) {
    // Game over
  }
}

// Fonction pour vérifier les collisions
function collision(head) {
  return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

// Boucle de jeu
setInterval(function() {
  update();
  draw();
}, 100);