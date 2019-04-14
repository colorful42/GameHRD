class CheerMove extends egret.Sprite{
    private pieces:Array<CheerPieces>;
    public cheerLength:number;
    public offsetX:number;
    public offsetY:number;
    public nowX:number;
    public nowY:number;
    public a:boolean;

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
        this.show();
       // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);

    }

    public init(arrs:Array<string>){
        this.pieces = [];

        var k = 0;
        for(var i=0;i<10;i++){
                var img:CheerPieces = new CheerPieces();
                img.createImg(arrs[k++]);  
                switch(i){
                   case 0:
                   img.x = 170;
                   img.y = 150;
                   break;
                   case 1:
                   img.x = 320;
                   img.y = 150;
                   break;
                   case 2:
                   img.x = 470;
                   img.y = 150;
                   break;
                   case 3:
                   img.x = 170;
                   img.y = 350;
                   break;
                   case 4:
                   img.x = 320;
                   img.y = 300;
                   break;
                   case 5:
                   img.x = 470;
                   img.y = 350;
                   break;
                   case 6:
                   img.x = 270;
                   img.y = 400;
                   break;
                   case 7:
                   img.x = 370;
                   img.y = 400;
                   break;
                   case 8:
                   img.x = 170;
                   img.y = 500;
                   break;
                   case 9:
                   img.x = 470;
                   img.y = 500;
                   break;
               }  
                img.anchorOffsetX = img.width/2;//设置图片锚点居中
                img.anchorOffsetY = img.height/2;
                this.addChild(img); 
                this.pieces.push(img);  

                img.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
                img.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
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

            this.offsetX = e.stageX-e.target.width/2;
            this.offsetY = e.stageY-e.target.height/2;
         e.target.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    }

     public onMove(e:egret.TouchEvent):void{
         this.nowX = e.stageX-e.target.width/2;
         this.nowY = e.stageY-e.target.height/2;
         if((this.nowX>this.offsetX)&&((this.nowX-this.offsetX>this.nowY-this.offsetY)||(this.nowX-this.offsetX>this.offsetY-this.nowY))){
             e.target.x+=100;
         }
         else if((this.nowX<this.offsetX)&&((this.offsetX-this.nowX>this.nowY-this.offsetY)||(this.offsetX-this.nowX>this.offsetY-this.nowY))){
              e.target.x-=100;
         }
         else if((this.nowY>this.offsetY)&&((this.nowX-this.offsetX<this.nowY-this.offsetY)||(this.offsetX-this.nowX<this.nowY-this.offsetY))){
              e.target.y+=100;
         }
         else if((this.nowY<this.offsetY)&&((this.nowX-this.offsetX<this.offsetY-this.nowY)||(this.offsetX-this.nowX<this.offsetY-this.nowY))){
             e.target.y-=100;
         }
         
    }
    public endMove(e:egret.TouchEvent):void{
       e.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    } 
}