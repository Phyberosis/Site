class World {
    constructor(pixi) {
        let p = pixi
        this._noCollision = []
        this._col = []

        let l = 3
        for (let x = 0; x < l; x++) {
            for (let y = 0; y < l; y++) {
                let r = 800 / l
                let e = new EntTest(p)
                e.X = r * x
                e.Y = r * y

                let spd = 1
                e.dx = (Math.random() * spd) - (spd / 2)
                e.dy = (Math.random() * spd) - (spd / 2)

                this._col.push(e)
            }
        }
        Logger.SetInfo('ents', this._col.length)
    }

    Update(dt) {
        let noC = this._noCollision
        let col = this._col

        let Right = window.innerWidth
        let Top = window.innerHeight

        for (let e of col) {
            e.X += e.dx * dt
            e.Y += e.dy * dt

            if(e.X < 0 || e.X + e.W > Right)
            {
                e.dx = -e.dx
                e.X = Math.max(e.X, 0)
                e.X = Math.min(e.X, Right - e.W)
            }
            if(e.Y < 0 || e.Y + e.H > Top)
                e.dy = -e.dy
                e.Y = Math.max(e.Y, 0)
                e.Y = Math.min(e.Y, Top - e.H)
        }

        let q = new QuadTree(col)
        q.Collide()

        // console.log(col[0])
        Logger.SetInfo('dt', dt)
    }

    Compile() {
        let noC = this._noCollision
        let col = this._col

        for (let ent of col) {
            ent.Compile()
        }
    }
}