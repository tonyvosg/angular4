"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//======== class ========
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this.x = _x;
        this.y = _y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            this.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log(this.x);
        console.log(this.y);
    };
    Point.prototype.getDistance = function () {
        console.log(this.y - this.x);
    };
    return Point;
}());
exports.Point = Point;
