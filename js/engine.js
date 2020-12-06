let Logger

class Engine
{
    constructor()
    {
        //2
        let onLoadProgress = (loader, resource) => {
            // report progress
        }

        //3
        let onImagesLoaded = () => {
            let p = this._pixi
            this._world = new World(p)
        
            this._lastT = performance.now()
            this._beginTicks()
        }
        
        //1
        this._pixi = new PixiConnector(onImagesLoaded, onLoadProgress, 
            (dt) => { //render
            this._world.Compile()
            Logger.CompileInfo(this._pixi)
        });
        Logger = new Debug(this._pixi)
    }

    GetPixi()
    {
        return this._pixi
    }

    _beginTicks()
    {
        const MaxDelay = 50
        let me = this
        let tick = (now) => {
            let dt = Math.max(now - me._lastT, MaxDelay)
            me._lastT = now
            Logger.CountUpdate()
            me._world.Update(dt)
    
            window.requestAnimationFrame(tick)
        }
        window.requestAnimationFrame(tick)
    }
}

// function beginTicks(){

//   let lastT = new Date().getTime();
//   let p = new Promise.resolve().then(()=>{
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