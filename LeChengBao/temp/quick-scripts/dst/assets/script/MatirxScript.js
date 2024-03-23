
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MatirxScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYXRpcnhTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvRUM7UUFsRUMsWUFBTSxHQUFlLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRTFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQ3JCLFlBQU0sR0FBZTtZQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87U0FDakIsQ0FBQztRQUNNLFlBQU0sR0FBZ0IsRUFBRSxDQUFDOztJQW9EbkMsQ0FBQztJQW5EQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsaUNBQWMsR0FBZDtRQUNFLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekMsY0FBYztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsYUFBYTtnQkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDRjtRQUVELDBDQUEwQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDOUMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFN0MsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoQyw2QkFBNkI7b0JBQzdCLHFCQUFxQjtvQkFDckIsMkRBQTJEO2lCQUM1RDtxQkFBTTtvQkFDTCxxQ0FBcUM7b0JBQ3JDLHVEQUF1RDtpQkFDeEQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzRDQUNLO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ0s7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBUlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9FNUI7SUFBRCxlQUFDO0NBcEVELEFBb0VDLENBcEVxQyxFQUFFLENBQUMsU0FBUyxHQW9FakQ7a0JBcEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gIHhJbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICB5SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbWF0cml4Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgY2VsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgcHJpdmF0ZSBjb2xvcnM6IGNjLkNvbG9yW10gPSBbXG4gICAgY2MuQ29sb3IuUkVELFxuICAgIGNjLkNvbG9yLkdSRUVOLFxuICAgIGNjLkNvbG9yLkJMVUUsXG4gICAgY2MuQ29sb3IuWUVMTE9XLFxuICAgIGNjLkNvbG9yLk1BR0VOVEEsXG4gIF07XG4gIHByaXZhdGUgbWF0cml4OiBjYy5Ob2RlW11bXSA9IFtdO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkdlbmVyYXRlXCIpO1xuICAgIGdlbmVyYXRlQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5nZW5lcmF0ZU1hdHJpeCwgdGhpcyk7XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxuICBnZW5lcmF0ZU1hdHJpeCgpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQodGhpcy54SW5wdXQuc3RyaW5nKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQodGhpcy55SW5wdXQuc3RyaW5nKTtcblxuICAgIC8vIENsZWFyIGV4aXN0aW5nIG1hdHJpeFxuICAgIHRoaXMubWF0cml4Q29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgLy8g5Li65q+P5LiqY2VsbOiuvue9ruminOiJslxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSsrKSB7XG4gICAgICB0aGlzLm1hdHJpeFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB5OyBqKyspIHtcbiAgICAgICAgY29uc3QgY29sb3JJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sb3JzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuXG4gICAgICAgIGNlbGwuY29sb3IgPSB0aGlzLmNvbG9yc1tjb2xvckluZGV4XTtcbiAgICAgICAgLy/orr7nva5jZWxs55qEc2l6ZVxuICAgICAgICBjZWxsLnNldENvbnRlbnRTaXplKDUwLCA1MCk7XG4gICAgICAgIC8v6K6+572u5L2N572uXG4gICAgICAgIGNlbGwuc2V0UG9zaXRpb24oaSAqIDYwLCBqICogNjApO1xuICAgICAgICB0aGlzLm1hdHJpeENvbnRhaW5lci5hZGRDaGlsZChjZWxsKTtcbiAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0gPSBjZWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkanVzdCBwcm9iYWJpbGl0aWVzIGJhc2VkIG9uIG5laWdoYm9yc1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgeDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHk7IGorKykge1xuICAgICAgICBjb25zdCBwcmV2Q29sb3IgPSB0aGlzLm1hdHJpeFtpIC0gMV1bal0uY29sb3I7XG4gICAgICAgIGNvbnN0IGFib3ZlQ29sb3IgPSB0aGlzLm1hdHJpeFtpXVtqIC0gMV0uY29sb3I7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMubWF0cml4W2ldW2pdLmNvbG9yO1xuXG4gICAgICAgIGlmIChwcmV2Q29sb3IuZXF1YWxzKGFib3ZlQ29sb3IpKSB7XG4gICAgICAgICAgLy8gSW5jcmVhc2UgcHJvYmFiaWxpdHkgYnkgWSVcbiAgICAgICAgICAvLyBBZGp1c3QgWSBhcyBuZWVkZWRcbiAgICAgICAgICAvLyBFeGFtcGxlOiBjdXJyZW50Q29sb3IuYSArPSAwLjE7IC8vIEluY3JlYXNlIGFscGhhIGJ5IDEwJVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNwbGl0IHJlbWFpbmluZyBwcm9iYWJpbGl0eSBldmVubHlcbiAgICAgICAgICAvLyBFeGFtcGxlOiBjdXJyZW50Q29sb3IuYSArPSAoMSAtIGN1cnJlbnRDb2xvci5hKSAvIDM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==