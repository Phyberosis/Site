class ResourceHandler
{
    constructor(onLoadComplete){
        this.res = [];

        this.res.avatar = new Image();
        this.res.avatar.src = "https://github.com/Phyberosis/Site/raw/master/res/avatar_128.png";
        this.res.avatar.onload = onLoadComplete;
    }

    getAvatar(){
        return this.res.avatar;
    }
}