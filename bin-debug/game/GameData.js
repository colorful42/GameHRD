var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.step = 0; //记录步数
    GameData.LENGTH = 600;
    GameData.chess = ["zhao_png", "cao_png", "zhang_png", "ma_png",
        "guan_png", "huang_png", "zu_png", "zu_png", "zu_png", "zu_png"];
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map