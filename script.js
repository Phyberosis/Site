let canvas, ctx, de;

function init () {
  // set our config variables
  canvas = document.getElementById('myCanvas')
  ctx = canvas.getContext('2d')

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  de = new DisplayEngine(ctx);

  beginTicks();
}
document.addEventListener('DOMContentLoaded', init)

function beginTicks(){
  ctx.font = "30px Arial";

  let lastT = new Date().getTime();
  let p = Promise.resolve().then(()=>{
    setTimeout(()=>{
      chainTicks(p, lastT)
    });
  });
}

function chainTicks(p, lastT){
  let curr = new Date().getTime();
  
  de.tick(curr - lastT);

  lastT = curr;
  p = p.then(()=>{
    setTimeout(()=>{
      chainTicks(p, lastT);
    });
  });

  return p;
}