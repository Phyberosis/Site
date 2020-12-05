class Entity
{
    constructor(sprite)
    {
        this._sprite = sprite
        this.X = 0
        this.Y = 0
    }

    Compile(dt)
    {
        let s = this._sprite
        s.x = this.X
        s.y = this.Y
    }

    SetVisibility(bool)
    {
        let s = this._sprite
        s.visible = bool
    }
}