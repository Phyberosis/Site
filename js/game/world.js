class World
{
    constructor(pixi)
    {
        let p = pixi
        this. _noCollision = []

        let l = 100

        for(let x = 0; x < l; x++)
        {
            for(let y = 0; y < l; y++)
            {
                let r = 7
                let e = new EntTest(p)
                e.X = r * x * 2
                e.Y = r * y
                this._noCollision.push(e)
            }
        }
        
        let e = new EntTest(p)
        e.X = 20
        e.Y = 800
        this._noCollision.push(e)
        Logger.SetInfo('ents', this._noCollision.length)
    }

    Update(dt)
    {
        let noC = this._noCollision

        for(let ent of noC)
        {
            ent.X = ent.X > 1500 ? 20 : ent.X + (dt / 4)
        }
    }

    Compile(dt)
    {
        let noC = this._noCollision

        for(let ent of noC)
        {
            ent.Compile(dt)
        }
    }
}