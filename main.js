let eng;

document.addEventListener('DOMContentLoaded', init)
window.addEventListener("resize", resize);

function init () {
  // set our config variables

  eng = new Engine();
  // let rh = new ResourceHandler(dispatch.Begin);
}

function resize(){
  eng.GetPixi().Resize();
}