class World
{
    constructor(pixi)
    {
        let p = pixi
        this. _noCollision = []

        let l = 2
        for(let x = 0; x < l; x++)
        {
            for(let y = 0; y < l; y++)
            {
                let r =200
                let e = new EntTest(p)
                e.X = r * x
                e.Y = r * y
                this._noCollision.push(e)
            }
        }
        Logger.SetInfo('ents', this._noCollision.length)
    }

    Update(dt)
    {
        let noC = this._noCollision

        for(let ent of noC)
        {
            ent.X = ent.X > 1500 ? 20 : ent.X + 1
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