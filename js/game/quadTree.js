class QuadTree
{
    constructor(ents)
    {
        this._ents = ents
    }

    Collide()
    {
        let ents = this._ents
        const r = 10000
        for(let i = 0; i < ents.length - 1; i++)
        {
            for(let ii = i + 1; ii < ents.length; ii++)
            {
                let e = ents[i]
                let o = ents[ii]

                if(e == o)
                    continue
    
                let sd = ((e.X - o.X) * (e.X - o.X)) + ((e.Y - o.Y) * (e.Y - o.Y))
    
                if(sd < r)
                {
                    let eox = o.X - e.X > 0? e.dx > 0 : e.dx < 0
                    let eoy = o.Y - e.Y > 0? e.dy > 0 : e.dy < 0
                    if(eox || eoy)
                    {
                        e.dx = -e.dx
                        e.dy = -e.dy
                    }

                    let oex = e.X - o.X > 0? o.dx > 0 : o.dx < 0
                    let oey = e.Y - o.Y > 0? o.dy > 0 : o.dy < 0
                    if(oex || oey)
                    {
                        o.dx = -o.dx
                        o.dy = -o.dy
                    }
                }
            }
        }
    }
}