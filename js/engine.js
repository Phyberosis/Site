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


            this._beginTicks(this._update, 0)   //logic loop
            this._beginTicks((dt) => {          //draw loop
                this._world.Compile(dt)
                Logger.CompileInfo(this._pixi)
                this._pixi.Render()
            }, 30)
        }
        
        //1
        this._pixi = new PixiConnector(onImagesLoaded, onLoadProgress);
        Logger = new Debug(this._pixi)
    }

    GetPixi()
    {
        return this._pixi
    }

    // called each tick
    _update(me, dt) {
        // console.log(dt)
        Logger.CountUpdate()
        me._world.Update(dt)
    }

    // looper
    _beginTicks(update, freq) {
        let me = this
        let now = () => {
            return new Date().getTime();
        }

        let delta = freq == 0? 0 : 1000 / freq

        let lastT = now();
        Promise.resolve().then(function step() {
            return Promise.resolve()
            .then(() => {
                let begin = now()
                let dt = begin - lastT
                if(dt >= delta){
                    update(me, dt)
                    lastT = begin
                }
            })
            .then(() => {
                setTimeout(() => {
                    step()
                })
            })
        }).catch((err) => {
            console.error(err)
            console.log('engine stopped')
        })
    }

    _stopTicks() {

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