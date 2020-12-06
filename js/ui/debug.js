class Debug
{
    constructor(pixi) {
        this._info = {
            ups: 0,
            fps: 0
        }
        this._data = {
            updates: [0, 0, 0, 0],
            frames: [0, 0, 0, 0],
            i: 0,
            lastT: new Date().getTime()
        }
        let i = pixi.MakeText("test", pixi.TextStyles.Debug)
        this.Info = i
    }

    CountUpdate()
    {
        this._data.updates[this._data.i] += 1
    }

    CountFrame()
    {   
        this._data.frames[this._data.i] += 1
    }

    CompileInfo(pixi)
    {
        let txt = ""
        let info = this._info
        let data = this._data
        let now = new Date().getTime();

        pixi.BringToFront(this.Info)
        this.CountFrame()

        const delta = 250
        if (now - data.lastT >= delta) {

            let ups = 0
            for(let i of data.updates)
            {
                ups += i
            }
            info.ups = ups

            let frames = 0
            for(let i of data.updates)
            {
                frames += i
            }
            info.fps = frames

            data.lastT = now
            data.i = data.i >= 3? 0 : data.i + 1
            data.updates[data.i] = 0
            data.frames[data.i] = 0
        }

        let keys = Object.keys(info)
        for(let key of keys) {
            txt += key + ": " + info[key] + "\n"
        }

        this.Info.text = txt
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