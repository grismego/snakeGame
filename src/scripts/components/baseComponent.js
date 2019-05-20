export default class BaseComponent {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext(`2d`);
  }
}
