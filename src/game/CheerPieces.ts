class CheerPieces extends egret.Sprite{
    public img:egret.Bitmap = null;
    public border:egret.Sprite = null;
    public loc_x:number = 0;
    public loc_y:number = 0;
    
    public constructor(){
        super();
        this.touchEnabled = true;
    }

    public createImg(name:string){
        this.img = new egret.Bitmap();
        let texture:egret.Texture = RES.getRes(name);
        this.img.texture = texture;
        this.img.x = 0;
        this.img.y = 0;
        this.addChild(this.img);
    }

     public show(){
        // if(!this.border)
        // {
        //     this.border = new egret.Sprite();
        // }
        // this.border.graphics.lineStyle(1,0xcccccc);
        // this.border.graphics.drawRect(0,0,this.img.width,this.img.width);
        // this.addChild(this.img);
        // this.addChild(this.border);

        // var zhaoimg:egret.Bitmap = new egret.Bitmap();
        // zhaoimg.texture = RES.getRes("2p13_png");
        // this.addChild(zhaoimg);
        // zhaoimg.x=120;
        // zhaoimg.y=50;

        // var cao:egret.Bitmap = new egret.Bitmap();
        // cao.texture = RES.getRes("2p2_png");
        // this.addChild(cao);
        // cao.x=220;
        // cao.y=50;
       
        // var zhang:egret.Bitmap = new egret.Bitmap();
        // zhang.texture = RES.getRes("2p12_png");
        // this.addChild(zhang);
        // zhang.x=420;
        // zhang.y=50;

        // var ma:egret.Bitmap = new egret.Bitmap();
        // ma.texture = RES.getRes("2p11_png");
        // this.addChild(ma);
        // ma.x=120;
        // ma.y=250;
       
        // var guan:egret.Bitmap = new egret.Bitmap();
        // guan.texture = RES.getRes("1p2_png");
        // this.addChild(guan);
        // guan.x=220;
        // guan.y=250;
 
        // var huang:egret.Bitmap = new egret.Bitmap();
        // huang.texture = RES.getRes("2p11_png");
        // this.addChild(huang);
        // huang.x=420;
        // huang.y=250;

        // var zu1:egret.Bitmap = new egret.Bitmap();
        // zu1.texture = RES.getRes("1p1_png");
        // this.addChild(zu1);
        // zu1.x=220;
        // zu1.y=350;

        // var zu2:egret.Bitmap = new egret.Bitmap();
        // zu2.texture = RES.getRes("1p1_png");
        // this.addChild(zu2);
        // zu2.x=320;
        // zu2.y=350;

        // var zu3:egret.Bitmap = new egret.Bitmap();
        // zu3.texture = RES.getRes("1p1_png");
        // this.addChild(zu3);
        // zu3.x=120;
        // zu3.y=450;

        // var zu4:egret.Bitmap = new egret.Bitmap();
        // zu4.texture = RES.getRes("1p1_png");
        // this.addChild(zu4);
        // zu4.x=420;
        // zu4.y=450;
      
        // public setimgNumber(val:number){
        // this.imgNumber = val;
    }
 
    // public getimgNumber(){
    //     return this.imgNumber;
    // }
 

    public static getWidth(){
        return this.getWidth;
    }
 
}