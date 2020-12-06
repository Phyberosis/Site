let Logger

class Engine {
    constructor() {
        //2
        let onLoadProgress = (loader, resource) => {
            // report progress
        }

        let update = (dt) => { }
        //3
        let onImagesLoaded = () => {
            let p = this._pixi
            this._world = new World(p)

            // this.lastT = new Date().getTime()
            //this._beginTicks()

            p.AddUpdate((pixiDT) => {
                let dt = pixiDT * 1000 / 60

                let me = this
                Logger.CountUpdate()
                me._world.Update(dt)
        
                me._world.Compile(dt)
                Logger.CountRender()
                Logger.CompileInfo(this._pixi)
                Logger.SetInfo('dt', dt)
            })
        }

        //1
        this._pixi = new PixiConnector(onImagesLoaded, onLoadProgress);
        Logger = new Debug(this._pixi)
        // this._updated = false
    }

    GetPixi() {
        return this._pixi
    }
}
    // // called each tick
    // _update(me, dt) {
    //     // console.log(dt)
    //     Logger.CountUpdate()
    //     me._world.Update(dt)
    //     me._updated = true
    // }

    // _render(me, dt) {
    //     if (!me._updated)
    //         return

    //     me._world.Compile(dt)
    //     Logger.CountRender()
    //     Logger.CompileInfo(this._pixi)
    //     //  me._pixi.Render()
    //     me._updated = false
    // }

    // // looper
    // _beginTicks() {

    //     const periodU = 0
    //     const periodR = 1000 / 60
    //     const me = this

    //     let update = (lastT, otherT) => {
    //         let curr = new Date().getTime()
    //         let dt = curr - lastT
    //         // if (dt >= periodU)
    //         // {
    //         //     me._update(me, dt)
    //         //     lastT = curr
    //         // }
    //         me._update(me, dt)
    //         lastT = curr

    //         setTimeout(() => {
    //             render(otherT, lastT)
    //         })
    //     }

    //     let render = (lastT, otherT) => {
    //         let curr = new Date().getTime()
    //         let dt = curr - lastT
    //         if (dt >= periodR)
    //         {
    //             me._render(me, dt)
    //             // Logger.CompileInfo(this._pixi)
    //             lastT = curr
    //         }

    //         setTimeout(() => {
    //             update(otherT, lastT)
    //         })
    //     }

    //     setTimeout(() => {
    //         let now = new Date().getTime()
    //         update(now,
    //             now)
    //     })

        // Promise.resolve().then(function step() {
        //     return Promise.resolve()
        //         .then(() => {
        //             let begin = now()
        //             let dt = begin - lastT
        //             if (dt >= delta) {
        //                 update(me, dt)
        //                 lastT = begin
        //             }
        //         })
        //         .then(() => {
        //             setTimeout(() => {
        //                 step() // should move to worker, maybe
        //             })
        //             //step()
        //         })
        // }).catch((err) => {
        //     console.error(err)
        //     alert('engine stopped')
        //     // console.log('')
        // })
    // }

    // _stopTicks() {
    //     alert('hey tony, you havent implemented stop')
    // }

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