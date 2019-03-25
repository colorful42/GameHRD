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
        if (!this.border) {
            this.border = new egret.Sprite();
        }
        this.border.graphics.lineStyle(1, 0xcccccc);
        this.border.graphics.drawRect(0, 0, this.img.width, this.img.width);
        this.addChild(this.img);
        this.addChild(this.border);
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