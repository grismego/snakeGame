import 'normalize.css';
import '../styles/index.scss';
import './lib/area';
import Snake from './components/snakeComponent';

const canvas = document.querySelector(`#snake`);
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let snakeComponent = new Snake(canvas);



snakeComponent.init();
console.log(snakeComponent);
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
