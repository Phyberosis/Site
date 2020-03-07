class DisplayEngine
{
    constructor(context, rh){
        this.ctx = context;
        this.frame = 0;
        this.rh = rh;

        this.ctx.font = "30px Arial";

        this.resize();

        this.x = 30
        this.y = 0;
    }

    resize(){
        this.ctx.canvas.width  = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;

        // alert("hi");
    }

    clear(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    tick(dt){
        this.clear();
          
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.frame, this.x, this.y);
        this.ctx.drawImage(this.rh.getAvatar(), 600 - this.x, this.y);
        this.ctx.drawImage(this.rh.getAvatar(), 640 - this.x, this.y);

        this.frame+=dt;

        this.x++;
        this.y++;

        if(this.y > 500){
            this.y = 0;
            this.x = 30;
        }
    }
}