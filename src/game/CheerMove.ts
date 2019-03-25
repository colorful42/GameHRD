class CheerMove extends egret.Sprite{
    private pieces:Array<CheerPieces>;
    public cheerLength:number;

    public gameStartPanel:GameStartPanel;    //开始界面
    /*
    public gameOverPanel:GameOverPanel;    //结
    */
 
    public constructor(){
        super();
        this.addGameStartPanel();
    }

    public addGameStartPanel(){       
        this.gameStartPanel = new GameStartPanel();
        this.gameStartPanel.y = -65; 
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.addEventListener("startgame",this.gameStart,this);
        
    }

    public gameStart(){
        this.init(GameData.chess);
        // this.upset();
        this.show();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCheersClick,this);

    }

    public upset(){
        console.log("a");
    }

    public init(arrs:Array<string>){
        // for(var k=0;k<7;k++){
        // // var pieces1:CheerPieces = new CheerPieces;
        // // pieces1.createImg(arrs[k]);
        // // pieces1.loc_x = k+1;
        // // pieces1.loc_y = k+2;
        // var img:egret.Bitmap = new egret.Bitmap();
        // img.texture = RES.getRes(arrs[k]);
        // this.addChild(img);
        // img.x=k*2+100;
        // img.y=k*3+100;
    
        // }
        var zhaoimg:egret.Bitmap = new egret.Bitmap();
        zhaoimg.texture = RES.getRes("2p13_png");
        this.addChild(zhaoimg);
        zhaoimg.x=120;
        zhaoimg.y=50;
        zhaoimg.touchEnabled=true;

        var cao:egret.Bitmap = new egret.Bitmap();
        cao.texture = RES.getRes("2p2_png");
        this.addChild(cao);
        cao.x=220;
        cao.y=50;
        cao.touchEnabled=true;

        var zhang:egret.Bitmap = new egret.Bitmap();
        zhang.texture = RES.getRes("2p12_png");
        this.addChild(zhang);
        zhang.x=420;
        zhang.y=50;
        zhang.touchEnabled=true;

        var ma:egret.Bitmap = new egret.Bitmap();
        ma.texture = RES.getRes("2p11_png");
        this.addChild(ma);
        ma.x=120;
        ma.y=250;
        ma.touchEnabled=true;
       
        var guan:egret.Bitmap = new egret.Bitmap();
        guan.texture = RES.getRes("1p2_png");
        this.addChild(guan);
        guan.x=220;
        guan.y=250;
        guan.touchEnabled=true;
 
        var huang:egret.Bitmap = new egret.Bitmap();
        huang.texture = RES.getRes("2p11_png");
        this.addChild(huang);
        huang.x=420;
        huang.y=250;
        huang.touchEnabled=true;

        var zu1:egret.Bitmap = new egret.Bitmap();
        zu1.texture = RES.getRes("1p1_png");
        this.addChild(zu1);
        zu1.x=220;
        zu1.y=350;
        zu1.touchEnabled=true;

        var zu2:egret.Bitmap = new egret.Bitmap();
        zu2.texture = RES.getRes("1p1_png");
        this.addChild(zu2);
        zu2.x=320;
        zu2.y=350;
        zu2.touchEnabled=true;

        var zu3:egret.Bitmap = new egret.Bitmap();
        zu3.texture = RES.getRes("1p1_png");
        this.addChild(zu3);
        zu3.x=120;
        zu3.y=450;
        zu3.touchEnabled=true;

        var zu4:egret.Bitmap = new egret.Bitmap();
        zu4.texture = RES.getRes("1p1_png");
        this.addChild(zu4);
        zu4.x=420;
        zu4.y=450;
        zu4.touchEnabled=true;

        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle( 50, 0xC0DBF3 );
        shp.graphics.moveTo( 220, 575 );
        shp.graphics.lineTo( 95, 575);
        shp.graphics.lineTo( 95, 25);
        shp.graphics.lineTo( 545, 25);
        shp.graphics.lineTo( 545, 575);
        shp.graphics.lineTo( 420, 575);
        shp.graphics.endFill();
        this.addChild( shp );

    }
    public show(){
       
    }

    public onCheersClick(evt:egret.TouchEvent){
        console.log("c");
    }

}