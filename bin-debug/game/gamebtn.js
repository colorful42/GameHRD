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
var gamebtn = (function (_super) {
    __extends(gamebtn, _super);
    function gamebtn() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game_skins/gamebtn.exml";
        return _this;
    }
    gamebtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gamebtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickStart, this);
    };
    gamebtn.prototype.onClickStart = function () {
        this.dispatchEventWith("startgame");
    };
    return gamebtn;
}(eui.Component));
__reflect(gamebtn.prototype, "gamebtn", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=gamebtn.js.map