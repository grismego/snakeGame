!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0),i(1);var n=37,a=38,s=39,o=40;function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=new Image;r.src="./img/apple.png";var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._width=40,this._height=40,this._canvas=e,this._ctx=e.getContext("2d"),this._snake=[{x:0,y:0}],this.drawSnakePart=this.drawSnakePart.bind(this),this.movementSnake=this.movementSnake.bind(this),this.changeDirection=this.changeDirection.bind(this),this.clearCanvas=this.clearCanvas.bind(this),this.onTick=this.onTick.bind(this),this.drawFood=this.drawFood.bind(this),this.didEatSnake=this.didEatSnake.bind(this),this.dx=40,this.dy=0,this.foodX=120,this.foodY=120,this.tick=300}var e,i,c;return e=t,c=[{key:"randomTen",value:function(t,e){return 40*Math.ceil((Math.random()*(e-t)+t)/40)}}],(i=[{key:"clearCanvas",value:function(){this._ctx.fillStyle="white",this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)}},{key:"drawFood",value:function(){this._ctx.drawImage(r,this.foodX,this.foodY,40,40)}},{key:"replaceSnake",value:function(){var t=this._snake[0],e=t.x,i=t.y;e<0?this._snake[0].x=this._canvas.width-40:e>this._canvas.width-40&&(this._snake[0].x=0),i<0?this._snake[0].y=this._canvas.height-40:i>this._canvas.height-40&&(this._snake[0].y=0)}},{key:"drawSnake",value:function(){this.didEatSnake(),this.replaceSnake(),this._snake.forEach(this.drawSnakePart)}},{key:"onTick",value:function(){this.didEatSnake()||(this._createListeners(),this.clearCanvas(),this.drawFood(),this.drawSnake(),this.movementSnake())}},{key:"didEatSnake",value:function(){for(var t=1;t<this._snake.length;t++){if(this._snake[t].x===this._snake[0].x&&this._snake[t].y===this._snake[0].y)return!0}}},{key:"init",value:function(){setInterval(this.onTick,300)}},{key:"drawSnakePart",value:function(t){this._ctx.fillStyle="lightgreen",this._ctx.fillRect(t.x,t.y,40,40),this._ctx.strokeRect(t.x,t.y,40,40)}},{key:"movementSnake",value:function(){var t={x:this._snake[0].x+this.dx,y:this._snake[0].y+this.dy};this._snake.unshift(t),this._snake[0].x===this.foodX&&this._snake[0].y===this.foodY?(this.createFood(),this.tick-=10,console.log(this.tick)):this._snake.pop()}},{key:"createFood",value:function(){var e=this;this.foodX=t.randomTen(0,this._canvas.width-40),this.foodY=t.randomTen(0,this._canvas.height-40),this._snake.forEach(function(t){t.x===e.foodX&&t.y===e.foodY&&e.createFood()})}},{key:"changeDirection",value:function(t){var e=t.keyCode,i=-40===this.dy,h=40===this.dy,r=40===this.dx,c=-40===this.dx;e!==a||h?e!==o||i?e!==n||r?e!==s||c||(this.dx=40,this.dy=0):(this.dx=-40,this.dy=0):(this.dy=40,this.dx=0):(this.dy=-40,this.dx=0)}},{key:"_createListeners",value:function(){document.addEventListener("keydown",this.changeDirection)}}])&&h(e.prototype,i),c&&h(e,c),t}(),d=document.querySelector("#snake");d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight;var u=new c(d);u.init(),console.log(u)}]);
//# sourceMappingURL=app.5e63aaaf.js.map