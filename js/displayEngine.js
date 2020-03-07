class DisplayEngine
{
    constructor(context, rh){
        this.ctx = context;
        this.rh = rh;

        this.resize();

        this.x = 30
        this.y = 0;

        this.sec = 0;
        this.frames = 0;
        this.fps = "";
    }

    resize(){
        this.ctx.canvas.width  = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;

        let fs = window.innerHeight / 60;
        this.ctx.font = fs + "px Consolas";  
        // alert("hi");
    }

    clear(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    tick(dt){
        this.sec+=dt;
        this.frames++;
        this.clear();
        this.ctx.fillStyle = "white";

        for(let i = 0; i<50; i++){
            for(let j = 0; j<50; j++)
                this.ctx.drawImage(this.rh.getAvatar(), 600 - this.x + (20*j), this.y + (20*i))
        }

        this.x++;
        this.y++;

        if(this.y > 500){
            this.y = 0;
            this.x = 30;
        }

        this.drawDebug();
    }

    drawDebug(){
        if(this.sec >= 500){
            this.fps = (this.frames * 2).toString();
            this.sec = 0;
            this.frames = 0;
        }

        this.ctx.fillStyle = "red";
        this.ctx.fillText("FPS: "+this.fps, 0, parseInt(this.ctx.font));
    }
}