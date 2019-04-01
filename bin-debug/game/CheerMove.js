var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CheerMove = (function (_super) {
    __extends(CheerMove, _super);
    /*
    public gameOverPanel:GameOverPanel;    //结
    */
    function CheerMove() {
        var _this = _super.call(this) || this;
        _this.addGameStartPanel();
        return _this;
    }
    CheerMove.prototype.addGameStartPanel = function () {
        this.gameStartPanel = new GameStartPanel();
        this.gameStartPanel.y = -65;
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.addEventListener("startgame", this.gameStart, this);
    };
    CheerMove.prototype.gameStart = function () {
        this.init(GameData.chess);
        // this.upset();
        this.show();
        // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCheersClick,this);
    };
    CheerMove.prototype.upset = function () {
        console.log("a");
    };
    CheerMove.prototype.init = function (arrs) {
        this.pieces = [];
        var k = 0;
        for (var i = 0; i < 10; i++) {
            var img = new CheerPieces();
            img.createImg(arrs[k++]);
            switch (i) {
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
            img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
            img.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCheersClick, this);
            img.addEventListener(egret.TouchEvent.TOUCH_END, this.endMove, this);
        }
        //    var piece:CheerPieces = new CheerPieces;
        //    piece.show();
        //    this.addChild(piece);
        var shp = new egret.Shape();
        shp.graphics.lineStyle(50, 0xC0DBF3);
        shp.graphics.moveTo(220, 575);
        shp.graphics.lineTo(95, 575);
        shp.graphics.lineTo(95, 25);
        shp.graphics.lineTo(545, 25);
        shp.graphics.lineTo(545, 575);
        shp.graphics.lineTo(420, 575);
        shp.graphics.endFill();
        shp.touchEnabled = false;
        this.addChild(shp);
    };
    CheerMove.prototype.show = function () {
    };
    CheerMove.prototype.startMove = function (e) {
        this.pieces = e.target;
        //计算手指和要拖动的对象的距离
        //console.log(e.target.loc_x+","+e.target.loc_y);
        this.offsetX = e.stageX - e.target.x;
        this.offsetY = e.stageY - e.target.y;
        // console.log(e.target.x+","+e.target.y);
        // console.log(e.stageX+","+e.stageY);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCheersClick, this);
    };
    CheerMove.prototype.onCheersClick = function (e) {
        e.target.x = e.stageX - this.offsetX;
        e.target.y = e.stageY - this.offsetY;
    };
    CheerMove.prototype.endMove = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onCheersClick, this);
    };
    return CheerMove;
}(egret.Sprite));
__reflect(CheerMove.prototype, "CheerMove");
//# sourceMappingURL=CheerMove.js.map