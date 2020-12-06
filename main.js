document.addEventListener('DOMContentLoaded', init)

function init () {
  // set our config variables

  const eng = new Engine()
  window.addEventListener("resize", () => {
    eng.GetPixi().Resize();
  });
  // window.requestAnimationFrame(update)
  // let rh = new ResourceHandler(dispatch.Begin);
}

// function update(now) {
//   eng.Update(now)
//   window.requestAnimationFrame(update)
// }