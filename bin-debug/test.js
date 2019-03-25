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
var test = (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.faceTween, _this);
        _this.skinName = "resource/game_skins/test.exml";
        return _this;
    }
    // protected partAdded(partName:string,instance:any):void{
    //     super.partAdded(partName,instance);
    // }
    // protected childrenCreate():void{
    //     super.childrenCreated();
    //     this.faceTween();
    // }
    test.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        console.log("createChildren");
    };
    test.prototype.faceTween = function () {
        var tw = egret.Tween.get(this.testbg, { loop: true });
        tw.to({ rotation: 360 }, 4000, egret.Ease.circIn).to({ rotation: 0 }, 0).wait(500);
    };
    return test;
}(eui.Component));
__reflect(test.prototype, "test", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=test.js.map