var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.step = 0; //记录步数
    GameData.LENGTH = 600;
    GameData.chess = ["1p1_png", "1p2_png", "2p2_png", "2p10_png",
        "2p11_png", "2p12_png", "2p13_png"];
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map