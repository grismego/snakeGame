export default class AreaComponent {
  constructor(canvas, area) {
    this._width = 40;
    this._height = 40;
    this._gap = 40;
    this._canvas = canvas;
    this._area = area;
  }

  draw() {
    const ctx = this._canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    for (let i = 0; i < this._area.length; i++) { // строки
      for (let j = 0; j < this._area[i].length; j++) { // столбцы
        if (this._area[i][j] === '1') {
          ctx.strokeStyle = "red";
        } else {
          ctx.strokeStyle = "black";
        }
        ctx.strokeRect(i * this._gap, j * this._gap, this._width, this._height);
      }
    }
  }
}
