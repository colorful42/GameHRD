class GameStartPanel extends egret.Sprite
{

    public startUI:gamebtn;

    public constructor(){
        super();
        this.init();
    }

    public init(){
        this.startUI = new gamebtn();
        this.startUI.addEventListener("startgame",this.onStartClick,this);

        this.addChild(this.startUI);
    }

     public onStartClick(){
        this.parent.removeChild(this);
        this.dispatchEventWith("startgame");
    }
}