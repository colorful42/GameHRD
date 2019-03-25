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
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheersClick, this);
    };
    CheerMove.prototype.upset = function () {
        console.log("a");
    };
    CheerMove.prototype.init = function (arrs) {
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
        var zhaoimg = new egret.Bitmap();
        zhaoimg.texture = RES.getRes("2p13_png");
        this.addChild(zhaoimg);
        zhaoimg.x = 120;
        zhaoimg.y = 50;
        zhaoimg.touchEnabled = true;
        var cao = new egret.Bitmap();
        cao.texture = RES.getRes("2p2_png");
        this.addChild(cao);
        cao.x = 220;
        cao.y = 50;
        cao.touchEnabled = true;
        var zhang = new egret.Bitmap();
        zhang.texture = RES.getRes("2p12_png");
        this.addChild(zhang);
        zhang.x = 420;
        zhang.y = 50;
        zhang.touchEnabled = true;
        var ma = new egret.Bitmap();
        ma.texture = RES.getRes("2p11_png");
        this.addChild(ma);
        ma.x = 120;
        ma.y = 250;
        ma.touchEnabled = true;
        var guan = new egret.Bitmap();
        guan.texture = RES.getRes("1p2_png");
        this.addChild(guan);
        guan.x = 220;
        guan.y = 250;
        guan.touchEnabled = true;
        var huang = new egret.Bitmap();
        huang.texture = RES.getRes("2p11_png");
        this.addChild(huang);
        huang.x = 420;
        huang.y = 250;
        huang.touchEnabled = true;
        var zu1 = new egret.Bitmap();
        zu1.texture = RES.getRes("1p1_png");
        this.addChild(zu1);
        zu1.x = 220;
        zu1.y = 350;
        zu1.touchEnabled = true;
        var zu2 = new egret.Bitmap();
        zu2.texture = RES.getRes("1p1_png");
        this.addChild(zu2);
        zu2.x = 320;
        zu2.y = 350;
        zu2.touchEnabled = true;
        var zu3 = new egret.Bitmap();
        zu3.texture = RES.getRes("1p1_png");
        this.addChild(zu3);
        zu3.x = 120;
        zu3.y = 450;
        zu3.touchEnabled = true;
        var zu4 = new egret.Bitmap();
        zu4.texture = RES.getRes("1p1_png");
        this.addChild(zu4);
        zu4.x = 420;
        zu4.y = 450;
        zu4.touchEnabled = true;
        var shp = new egret.Shape();
        shp.graphics.lineStyle(50, 0xC0DBF3);
        shp.graphics.moveTo(220, 575);
        shp.graphics.lineTo(95, 575);
        shp.graphics.lineTo(95, 25);
        shp.graphics.lineTo(545, 25);
        shp.graphics.lineTo(545, 575);
        shp.graphics.lineTo(420, 575);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    CheerMove.prototype.show = function () {
    };
    CheerMove.prototype.onCheersClick = function (evt) {
        console.log("c");
    };
    return CheerMove;
}(egret.Sprite));
__reflect(CheerMove.prototype, "CheerMove");
//# sourceMappingURL=CheerMove.js.map