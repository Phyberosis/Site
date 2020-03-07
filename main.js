let de;

document.addEventListener('DOMContentLoaded', init)
window.addEventListener("resize", resize);

function init () {
  // set our config variables
  let canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext('2d')

  let rh = new ResourceHandler(()=>{
    beginTicks();
  });

  de = new DisplayEngine(ctx, rh);
}

function resize(){
  de.resize();
}

function beginTicks(){

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