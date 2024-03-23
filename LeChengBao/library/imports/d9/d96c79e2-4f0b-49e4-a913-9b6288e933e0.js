"use strict";
cc._RF.push(module, 'd96c7niTwtJ5KkTm2KI6TPg', 'MatirxScript');
// script/MatirxScript.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xInput = null;
        _this.yInput = null;
        _this.matrixContainer = null;
        _this.cellPrefab = null;
        _this.colors = [
            cc.Color.RED,
            cc.Color.GREEN,
            cc.Color.BLUE,
            cc.Color.YELLOW,
            cc.Color.MAGENTA,
        ];
        _this.matrix = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var generateButton = this.node.getChildByName("btnGenerate");
        generateButton.on(cc.Node.EventType.TOUCH_END, this.generateMatrix, this);
    };
    // update (dt) {}
    NewClass.prototype.generateMatrix = function () {
        var x = parseInt(this.xInput.string);
        var y = parseInt(this.yInput.string);
        // Clear existing matrix
        this.matrixContainer.removeAllChildren();
        // 为每个cell设置颜色
        for (var i = 0; i < x; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < y; j++) {
                var colorIndex = Math.floor(Math.random() * this.colors.length);
                var cell = cc.instantiate(this.cellPrefab);
                cell.color = this.colors[colorIndex];
                //设置cell的size
                cell.setContentSize(50, 50);
                //设置位置
                cell.setPosition(i * 60, j * 60);
                this.matrixContainer.addChild(cell);
                this.matrix[i][j] = cell;
            }
        }
        // Adjust probabilities based on neighbors
        for (var i = 1; i < x; i++) {
            for (var j = 1; j < y; j++) {
                var prevColor = this.matrix[i - 1][j].color;
                var aboveColor = this.matrix[i][j - 1].color;
                var currentColor = this.matrix[i][j].color;
                if (prevColor.equals(aboveColor)) {
                    // Increase probability by Y%
                    // Adjust Y as needed
                    // Example: currentColor.a += 0.1; // Increase alpha by 10%
                }
                else {
                    // Split remaining probability evenly
                    // Example: currentColor.a += (1 - currentColor.a) / 3;
                }
            }
        }
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "xInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "yInput", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "matrixContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cellPrefab", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();