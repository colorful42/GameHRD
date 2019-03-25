class test extends eui.Component implements eui.UIComponent{
    public constructor(){
        super();
       this.addEventListener(eui.UIEvent.COMPLETE,this.faceTween,this);
        this.skinName = "resource/game_skins/test.exml";
    }
    // protected partAdded(partName:string,instance:any):void{
    //     super.partAdded(partName,instance);
    // }
    // protected childrenCreate():void{
    //     super.childrenCreated();

    //     this.faceTween();
    // }
     protected createChildren() {
        super.createChildren();
        console.log("createChildren")
    }

    public testbg:eui.Image;

    private faceTween():void{
        var tw = egret.Tween.get(this.testbg,{loop:true});
        tw.to({rotation:360},4000,egret.Ease.circIn).to({rotation:0},0).wait(500);
    }
}