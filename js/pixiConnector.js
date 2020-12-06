const SpriteIDs = {
    Avatar: "avatar_128.PNG"
}

class PixiConnector {
    constructor(onComplete, onProgress, tick) {
        //canvas
        const canvas = document.getElementById("myCanvas")
        const renderer = new PIXI.Renderer({
            view: canvas,
            width: window.innerWidth,
            height: window.innerHeight
        })

        // text
        this.TextStyles = {
            Example: new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 36,
                fill: "white",
                stroke: '#ff3300',
                strokeThickness: 4,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            }),
            Debug: new PIXI.TextStyle({
                fontFamily: "Courier",
                fontSize: 24,
                fill: '#ff3300'
            })
        }

        // textures
        const PRE = "res/";
        let loader = new PIXI.Loader()
        let keys = Object.keys(SpriteIDs)
        for (let name of keys) {
            loader = loader.add(name, PRE + SpriteIDs[name]);
            console.log(name)
            console.log(PRE + SpriteIDs[name])
        }
        loader.onProgress.add(onProgress)
        
        let textures = {}
        loader.onComplete.add(() => {
            let res = loader.resources
            let keys = Object.keys(res)
            for(let k of keys)
            {
                textures[k] = res[k].texture
                console.log(res[k].texture)
            }

            this._textures = textures
            onComplete()

            ticker.add((time) => {
                renderer.render(stage)
            })
            ticker.start()
        })

        loader.load()

        //ticker
        const ticker = new PIXI.Ticker()

        //stage
        const stage = new PIXI.Container()

        //fields
        this._stage = stage
        this._renderer = renderer
        this._ticker = ticker
    }

    AddUpdate(fn)
    {
        this._ticker.add(fn)
    }

    MakeText(txt, style) {
        let t = new PIXI.Text(txt, style);
        this._stage.addChild(t);
        return t
    }

    MakeSprite(idString) {
        // console.log(idString)
        let s = new PIXI.Sprite(this._textures[idString])
        this._stage.addChild(s);
        return s
    }

    Resize() {
        this._renderer.resize(window.innerWidth, window.innerHeight);
    }
}
