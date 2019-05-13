export default class Food {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext(`2d`);

    this.drawFood = this.drawFood.bind(this);

    this.foodX = 120;
    this.foodY = 120;
  }

  drawFood() {
    this._ctx.save();
    this._ctx.fillStyle = '#00bd39';
    this._ctx.beginPath();

    this._ctx.moveTo(this.foodX + 20, this.foodY + 10);

    this._ctx.quadraticCurveTo(
        this.foodX + 20,
        this.foodY - 10,
        this.foodX + 40,
        this.foodY - 10
      );

    this._ctx.closePath();

    this._ctx.quadraticCurveTo(
      this.foodX + 60,
      this.foodY,
      this.foodX + 40,
      this.foodY - 10
    );

    this._ctx.closePath();
    this._ctx.fill();
    this._ctx.restore();

    this._ctx.fillStyle = '#eb4135';
    this._ctx.beginPath();
    this._ctx.ellipse(this.foodX + 20, this.foodY + 20, 15, 15, 0, 0, Math.PI * 2);

    this._ctx.fill();
    this._ctx.closePath();
    this._ctx.restore();
  }

  createFood() {
    this.foodX = Food.randomTen(0, this._canvas.width - 40);
    this.foodY = Food.randomTen(0, this._canvas.height - 40);

    // this._snake.forEach((part) => {
    //   if (part.x === this.foodX && part.y === this.foodY) {
    //     this.createFood();
    //   }
    // });
  }

  static randomTen(min, max) {
    return Math.ceil((Math.random() * (max-min) + min) / 40) * 40;
  }
}
