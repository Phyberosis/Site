const SpriteIDs = {
    Avatar: "avatar_128.PNG"
}

class PixiConnector {
    constructor(onComplete, onProgress) {
        let app = new PIXI.Application({
            width: window.innerWidth,         // default: 800
            height: window.innerHeight,        // default: 600
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1       // default: 1
        });
        this.app = app;

        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(app.view);

        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;

        this.PRE = "res/";

        let toadd = [];
        for(let im of Object.values(SpriteIDs))
        {
            toadd.push(this.PRE + im);
        }

        PIXI.loader
            .add(toadd)
            .on("progress", onProgress)
            .load(() => {
                // let s = new PIXI.Sprite(PIXI.loader.resources[this.PRE + "avatar_128.PNG"].texture);
                // app.stage.addChild(s);
                onComplete()
            });
    }

    MakeSprite(idString)
    {
        // console.log(idString)
        // let s = new PIXI.Sprite(PIXI.loader.resources[this.PRE + idString].texture);
        // this.app.stage.addChild(s);
        // return s
    }

    DeleteSprite(sprite)
    {
        this.app.stage.removeChild(sprite);
    }

    Resize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
    }
}
