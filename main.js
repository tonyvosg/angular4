"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var like_button_1 = require("./like-button");
//catch compile time errors
//======== function ========
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
//======== var vs let variable declaration ========
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally " + i); //you can catch error at compile-time
}
doSomething();
//======== data type ========
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
//======== any data type usage ========
var count;
count = 'a'; //compilation error
count = 5;
//======== enum ================
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
; // explicit define the value for each colour so when you need to add more value, you know where to add
var backgroundColor = Color.Green;
//======== type assertion, casting ========
var message1;
message1 = "abc";
//let endWithC = (<string> message1).endsWith('c');
//let endWithA = (message1 as string).endsWith('a');
//console.log(endWithC);
//console.log(endWithA);
//======== arrow function ========
var log1 = function (message) {
    console.log(message);
};
var log2 = function (message) { return console.log(message); };
var log3 = function () { return console.log(message); };
////======== object ========
var point1 = new point_1.Point();
point1.X = 50;
point1.Y = 100;
point1.draw();
function drawPoint(point) {
    console.log(point.X);
    console.log(point.Y);
}
var point = { "x": 4, "y": 5 };
//========implement a like button ======
var likeButton = new like_button_1.LikeButton();
while (1) {
    likeButton.onClick();
    console.log(likeButton.LikeCount);
    console.log(likeButton.IsSelected);
}
