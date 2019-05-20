import Snake from "./snakeComponent";
import BaseComponent from "./baseComponent";

export default class GameComponent extends BaseComponent {
  constructor(canvas) {
    super(canvas);
    this.snake = new Snake(canvas);
    this.timer = null;
  }

  start() {
    this.timer = setInterval(() => {
      this.snake.init();

      if (this.snake.didEatSnake()) {
        this.stop();
      }
    }, 300);
  }

  stop() {
    clearInterval(this.timer);
  }
}
