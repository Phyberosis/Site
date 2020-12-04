class Engine
{
    constructor()
    {
        this.pixi = new PixiConnector(() => {
            let s = this.pixi.MakeSprite(SpriteIDs.Avatar);
            let e = new Entity(s);

            // Promise.resolve().then(() => {
            //     setTimeout(()=> {
            //         s.visible = !s.visible;
            //     }, 500)
            // })
        }, (loader, resource) => {
            // on progress
        });
    }
}

// function beginTicks(){

//   let lastT = new Date().getTime();
//   let p = Promise.resolve().then(()=>{
//     setTimeout(()=>{
//       chainTicks(p, lastT)
//     });
//   });
// }

// function chainTicks(p, lastT){
//   let curr = new Date().getTime();

//   de.tick(curr - lastT);

//   lastT = curr;
//   p = p.then(()=>{
//     setTimeout(()=>{
//       chainTicks(p, lastT);
//     });
//   });

//   return p;
// }