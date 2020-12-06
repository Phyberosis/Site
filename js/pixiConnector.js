const SpriteIDs = {
    Avatar: "avatar_128.PNG"
}

class PixiConnector {
    constructor(onComplete, onProgress, onFrame) {
        //canvas
        let app = new PIXI.Application({
            width: window.innerWidth,         // default: 800
            height: window.innerHeight,        // default: 600
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1       // default: 1
        });
        this._app = app;
        document.body.appendChild(app.view);

        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;

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

        this.PRE = "res/";
        let toadd = [];
        for (let im of Object.values(SpriteIDs)) {
            toadd.push(this.PRE + im);
        }

        PIXI.loader
            .add(toadd)
            .on("progress", onProgress)
            .load(() => {
                
                app.ticker.add(onFrame)
                onComplete()
            })
    }

    MakeText(txt, style) {
        let t = new PIXI.Text(txt, style);
        this._app.stage.addChild(t);
        return t
    }

    MakeSprite(idString) {
        // console.log(idString)
        let s = new PIXI.Sprite(PIXI.loader.resources[this.PRE + idString].texture);
        this._app.stage.addChild(s);
        return s
    }

    DeleteSprite(sprite) {
        this._app.stage.removeChild(sprite);
    }

    BringToFront(sprite)
    {
        let s = this._app.stage
        s.removeChild(sprite)
        // console.log(sprite)
        s.addChild(sprite)
    }

    Resize() {
        this._app.renderer.resize(window.innerWidth, window.innerHeight);
    }
}
