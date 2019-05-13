import 'normalize.css';
import '../styles/index.scss';
import './lib/area';
import Snake from './components/snakeComponent';
import Game from './components/gameComponent';

const canvas = document.querySelector(`#snake`);
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

// let snakeComponent = new Snake(canvas);

let gameComponent = new Game(canvas);


console.log(gameComponent);

gameComponent.startGame();
// document.addEventListener(`keydown`, (evt) => {


//   snakeComponent.moveSnake(evt.code);
//   snakeComponent.main();
//   // if (isCommandEvent(evt)) {
//   //   snakeComponent.moveSnake(evt.code);
//     // setInterval(()=>{
//     //   // console.log(snakeComponent);
//     //   snakeComponent.moveSnake(evt.code);
//     // }, 700);

//     // console.log();
// });
// snakeComponent.moveSnake();




// class Game {
//   constructor() {

//   }

//   init() {
//     setInterval(()=>{
//       snakeComponent.moveSnake();
//     }, 700);
//   }
// }

// let game = new Game();

// game.init();
