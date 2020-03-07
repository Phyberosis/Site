class DisplayEngine
{
    constructor(context){
        this.ctx = context;
        this.frame = 0;

        this.avatar = new Image();
    }

    clear(){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    tick(dt){
        this.clear();
          
        ctx.fillStyle = "white";
        ctx.fillText(this.frame, 0, 100);

        this.frame+=dt;
    }
}