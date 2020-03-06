let canvas, ctx

let test;

function init () {
  // set our config variables
  canvas = document.getElementById('myCanvas')
  ctx = canvas.getContext('2d')

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.beginPath()
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
document.addEventListener('DOMContentLoaded', init)

let pendingTask;
function beginTicks(){
  scheduleNext(resolve);
}

function tick(resolve, reject){
  scheduleNext(resolve);
}  

function scheduleNext(){
  pendingTask = new Promise(tick, resolve, reject);
}