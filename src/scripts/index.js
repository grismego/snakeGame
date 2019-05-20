import "normalize.css";
import "../styles/index.scss";
import GameComponent from "./components/gameComponent";

const canvas = document.querySelector(`#snake`);
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let game = new GameComponent(canvas);

game.start();
