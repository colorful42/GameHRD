class gamebtn extends eui.Component implements  eui.UIComponent {
   
    public btn_start:eui.Button;

    public constructor(){
        super();
		 this.skinName = "resource/game_skins/gamebtn.exml";
    }

  
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

    protected childrenCreated():void
	{
		super.childrenCreated();
		
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickStart,this);
	}

    public onClickStart(){
		this.dispatchEventWith("startgame");
    }
}