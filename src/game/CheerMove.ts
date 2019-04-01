class CheerMove extends egret.Sprite{
    private pieces:Array<CheerPieces>;
    public cheerLength:number;
    public offsetX:number;
    public offsetY:number;

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
       // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);

    }

    public upset(){
        console.log("a");
    }

    public init(arrs:Array<string>){
        this.pieces = [];

        var k = 0;
        for(var i=0;i<10;i++){
            
                var img:CheerPieces = new CheerPieces();
                img.createImg(arrs[k++]);  
               switch(i){
                   case 0:
                   img.x = 120;
                   img.y = 50;
                   break;
                   case 1:
                   img.x = 220;
                   img.y = 50;
                   break;
                   case 2:
                   img.x = 420;
                   img.y = 50;
                   break;
                   case 3:
                   img.x = 120;
                   img.y = 250;
                   break;
                   case 4:
                   img.x = 220;
                   img.y = 250;
                   break;
                   case 5:
                   img.x = 420;
                   img.y = 250;
                   break;
                   case 6:
                   img.x = 220;
                   img.y = 350;
                   break;
                   case 7:
                   img.x = 320;
                   img.y = 350;
                   break;
                   case 8:
                   img.x = 120;
                   img.y = 450;
                   break;
                   case 9:
                   img.x = 420;
                   img.y = 450;
                   break;
               }  
                this.addChild(img); 
                this.pieces.push(img);  

                img.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
                img.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);
                img.addEventListener(egret.TouchEvent.TOUCH_END,this.endMove,this);
            
        }
    //    var piece:CheerPieces = new CheerPieces;
    //    piece.show();
    //    this.addChild(piece);
       

        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle( 50, 0xC0DBF3 );
        shp.graphics.moveTo( 220, 575 );
        shp.graphics.lineTo( 95, 575);
        shp.graphics.lineTo( 95, 25);
        shp.graphics.lineTo( 545, 25);
        shp.graphics.lineTo( 545, 575);
        shp.graphics.lineTo( 420, 575);
        shp.graphics.endFill();
        shp.touchEnabled = false;
        this.addChild( shp );

    }
    public show(){
       
    }
    public startMove(e:egret.TouchEvent):void{
            this.pieces = e.target;
            //计算手指和要拖动的对象的距离
            //console.log(e.target.loc_x+","+e.target.loc_y);
            this.offsetX = e.stageX - e.target.x;
            this.offsetY = e.stageY - e.target.y;
           // console.log(e.target.x+","+e.target.y);
           // console.log(e.stageX+","+e.stageY);

           
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);
    }
     public onCheersClick(e:egret.TouchEvent):void{
        e.target.x = e.stageX - this.offsetX;
        e.target.y = e.stageY - this.offsetY;
    }

    public endMove(){
       this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);
    }

   
}