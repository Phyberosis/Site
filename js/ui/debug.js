class Debug
{
    constructor(pixi) {
        this._info = {
            ups: 0,
            fps: 0
        }
        this._counters = {
            updates: 0,
            frames: 0,
            lastT: new Date().getTime()
        }
        let i = pixi.MakeText("test", pixi.TextStyles.Debug)
        this.Info = i
    }

    CountUpdate()
    {
        this._counters.updates += 1
    }

    CompileInfo(pixi)
    {
        let txt = ""
        let info = this._info
        let counters = this._counters
        let now = new Date().getTime();

        pixi.BringToFront(this.Info)

        const delta = 250
        const factor = 1000 / delta
        if (now - counters.lastT >= delta) {
            info.ups = counters.updates * factor
            info.fps = counters.frames * factor

            counters.updates = 0
            counters.frames = 0
            counters.lastT = now
        }

        let keys = Object.keys(info)
        for(let key of keys) {
            txt += key + ": " + info[key] + "\n"
        }

        this.Info.text = txt
        this._counters.frames += 1
    }

    SetInfo(key, val)
    {
        this._info[key] = val
    }

    RemoveInfo(key)
    {
        delete this._info.key
    }
}