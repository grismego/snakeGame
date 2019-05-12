import {Command, KeyCode, isCommandEvent} from '../lib/command';

const STEP = 40;
const image = new Image();
image.src = `./img/apple.png`;

export default class Snake {
  constructor(canvas) {
    this._width = 40;
    this._height = 40;
    this._canvas = canvas;
    this._ctx = canvas.getContext(`2d`);

    this._snake = [{x: 0, y: 0}];
    // this._snake = [{x: 0, y: 0}, {x: 40, y: 0}, {x: 80, y: 0}, {x: 120, y: 0}, {x: 160, y: 0}, {x: 200, y: 0}, {x: 240, y: 0}];
    this.drawSnakePart = this.drawSnakePart.bind(this);
    this.movementSnake = this.movementSnake.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
    this.onTick = this.onTick.bind(this);
    this.drawFood = this.drawFood.bind(this);
    this.didEatSnake = this.didEatSnake.bind(this);

    this.dx = 40;
    this.dy = 0;

    this.foodX = 120;
    this.foodY = 120;

    this.tick = 300;
  }

  clearCanvas() {
    this._ctx.fillStyle = `white`;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawFood() {
    this._ctx.drawImage(image, this.foodX, this.foodY, 40, 40);
  }

  replaceSnake() {
    const {x, y} = this._snake[0];
    if (x < 0) {
      this._snake[0][`x`] = this._canvas.width - 40;
    } else if (x > this._canvas.width - 40) {
      this._snake[0][`x`] = 0;
    }
    if (y < 0) {
      this._snake[0][`y`] = this._canvas.height - 40;
    } else if (y > this._canvas.height - 40) {
      this._snake[0][`y`] = 0;
    }
  }

  drawSnake() {
    this.didEatSnake();
    this.replaceSnake();
    this._snake.forEach(this.drawSnakePart);
  }

  onTick() {
    if (this.didEatSnake()){
      return;
    }
    this._createListeners();
    this.clearCanvas();
    this.drawFood();
    this.drawSnake();
    this.movementSnake();
  }

  didEatSnake() {
    for (let i = 1; i < this._snake.length; i++) {
      const didCollide = this._snake[i].x === this._snake[0].x && this._snake[i].y === this._snake[0].y;
      if (didCollide) {
        return true;
      }
    }
  }

  init() {
    setInterval(this.onTick, 300);
  }

  drawSnakePart(snakePart) {
    this._ctx.fillStyle = `lightgreen`;
    this._ctx.fillRect(snakePart.x, snakePart.y, 40, 40);
    this._ctx.strokeRect(snakePart.x, snakePart.y, 40, 40);
  }

  movementSnake() {
    const head = {
      x: this._snake[0].x + this.dx,
      y: this._snake[0].y + this.dy
    };

    this._snake.unshift(head);

    const didEatFood = this._snake[0].x === this.foodX
          && this._snake[0].y === this.foodY;

    if (didEatFood) {
      this.createFood();

      this.tick-=10;
      console.log(this.tick);
    } else {
      this._snake.pop();
    }
  }

  createFood() {
    this.foodX = Snake.randomTen(0, this._canvas.width - 40);
    this.foodY = Snake.randomTen(0, this._canvas.height - 40);

    this._snake.forEach((part) => {
      if (part.x === this.foodX && part.y === this.foodY) {
        this.createFood();
      }
    });
  }

  changeDirection(event) {

    const keyPressed = event.keyCode;
    const goingUp = this.dy === -40;
    const goingDown = this.dy === 40;
    const goingRight = this.dx === 40;
    const goingLeft = this.dx === -40;

    if (keyPressed === KeyCode.UP && !goingDown) {
      this.dy = -40;
      this.dx = 0;
    } else if (keyPressed === KeyCode.DOWN && !goingUp) {
      this.dy = 40;
      this.dx = 0;
    } else if (keyPressed === KeyCode.LEFT && !goingRight) {
      this.dx = -40;
      this.dy = 0;
    } else if (keyPressed === KeyCode.RIGHT && !goingLeft) {
      this.dx = 40;
      this.dy = 0;
    }
  }

  _createListeners() {
    document.addEventListener(`keydown`, this.changeDirection);
  }

  static randomTen(min, max) {
    return Math.ceil((Math.random() * (max-min) + min) / 40) * 40;
  }
}
