"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton() {
        this.likeCount = 0;
        this.isSelected = false;
    }
    LikeButton.prototype.onClick = function () {
        this.likeCount += (this.IsSelected) ? -1 : 1;
        if (this.likeCount <= 0) {
            this.likeCount = 0;
        }
        this.isSelected = !this.isSelected;
    };
    Object.defineProperty(LikeButton.prototype, "LikeCount", {
        get: function () {
            return this.likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "IsSelected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeButton;
}());
exports.LikeButton = LikeButton;
