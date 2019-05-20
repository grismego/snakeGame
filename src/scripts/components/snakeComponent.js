import { KeyCode } from "../lib/command";
import FoodComponent from "./foodComponent";
import BaseComponent from "./baseComponent";

export default class Snake extends BaseComponent {
  constructor(canvas) {
    super(canvas);
    this.foodComponent = new FoodComponent(canvas);

    this._width = 40;
    this._height = 40;

    this._snake = [{ x: 0, y: 0 }];
    this.drawSnakePart = this.drawSnakePart.bind(this);
    this.movementSnake = this.movementSnake.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);

    this.didEatSnake = this.didEatSnake.bind(this);

    this.dx = 40;
    this.dy = 0;
  }

  clearCanvas() {
    this._ctx.fillStyle = `white`;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  replaceSnake() {
    const { x, y } = this._snake[0];
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

  init() {
    this._createListeners();
    this.clearCanvas();
    this.foodComponent.drawFood();
    this.drawSnake();
    this.movementSnake();
  }

  didEatSnake() {
    for (let i = 1; i < this._snake.length; i++) {
      const didClash = this._snake[i].x === this._snake[0].x && this._snake[i].y === this._snake[0].y;
      if (didClash) {
        return true;
      }
    }
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

    this.didEatFood();
  }

  didEatFood() {
    const didEatFood = this._snake[0].x === this.foodComponent.foodX && this._snake[0].y === this.foodComponent.foodY;

    didEatFood ? this.foodComponent.createFood() : this._snake.pop();
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
}
