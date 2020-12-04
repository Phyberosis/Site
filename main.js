let dispatch;

document.addEventListener('DOMContentLoaded', init)
window.addEventListener("resize", resize);

function init () {
  // set our config variables

  dispatch = new Engine();
  // let rh = new ResourceHandler(dispatch.Begin);
}

function resize(){
  pixi.resize();
}