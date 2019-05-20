import BaseComponent from "./baseComponent";
import { generateRandomTenNumber } from "../lib/random";

const image = new Image();
image.src = `./img/apple.png`;

export default class FoodComponent extends BaseComponent {
  constructor(canvas) {
    super(canvas);
    this.foodX = generateRandomTenNumber(0, this._canvas.width - 40);
    this.foodY = generateRandomTenNumber(0, this._canvas.height - 40);

    this.drawFood = this.drawFood.bind(this);
    this.createFood = this.createFood.bind(this);
  }

  drawFood() {
    this._ctx.drawImage(image, this.foodX, this.foodY, 40, 40);
  }

  createFood() {
    this.foodX = generateRandomTenNumber(0, this._canvas.width - 40);
    this.foodY = generateRandomTenNumber(0, this._canvas.height - 40);
  }
}
