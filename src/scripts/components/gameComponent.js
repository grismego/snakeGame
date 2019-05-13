import SnakeComponent from './snakeComponent';
import FoodComponent from './foodComponent';

let snakeComponent;
let foodComponent;

export default class Game {
  constructor(canvas) {
    this._canvas = canvas;

    this._interval = null;

    snakeComponent = new SnakeComponent(canvas);
    foodComponent = new FoodComponent(canvas);
    foodComponent.createFood();

    this.snakeEatedFood = this.snakeEatedFood.bind(this);
  }

  startGame() {
    this._interval = setInterval(() => {
      snakeComponent.init();
      foodComponent.drawFood();
      snakeComponent.drawSnake();

      snakeComponent.movementSnake();
      this.snakeEatedFood();
    }, 300);
  }

  snakeEatedFood() {

    const didEatFood = snakeComponent._snake[0].x === foodComponent.foodX
          && snakeComponent._snake[0].y === foodComponent.foodY;

    if (didEatFood) {
      foodComponent.createFood();
    } else {
      snakeComponent._snake.pop();
    }
  }
}
