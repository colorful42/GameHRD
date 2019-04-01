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
var CheerPieces = (function (_super) {
    __extends(CheerPieces, _super);
    function CheerPieces() {
        var _this = _super.call(this) || this;
        _this.img = null;
        _this.border = null;
        _this.loc_x = 0;
        _this.loc_y = 0;
        _this.touchEnabled = true;
        return _this;
    }
    CheerPieces.prototype.createImg = function (name) {
        this.img = new egret.Bitmap();
        var texture = RES.getRes(name);
        this.img.texture = texture;
        this.img.x = 0;
        this.img.y = 0;
        this.addChild(this.img);
    };
    CheerPieces.prototype.show = function () {
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
    };
    // public getimgNumber(){
    //     return this.imgNumber;
    // }
    CheerPieces.getWidth = function () {
        return this.getWidth;
    };
    return CheerPieces;
}(egret.Sprite));
__reflect(CheerPieces.prototype, "CheerPieces");
//# sourceMappingURL=CheerPieces.js.map