import {Point} from './point';
import {LikeButton} from './like-button';
//catch compile time errors
//======== function ========
function log(message){
    console.log(message)
}
var message = 'Hello World';
log(message)

//======== var vs let variable declaration ========
function doSomething(){
    for(var i=0; i<5; i++){
        console.log(i)
    }
    console.log("finally "+i)  //you can catch error at compile-time
}
doSomething();

//======== data type ========
let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[] = [1, true, 'a', false];
//======== any data type usage ========
let count:any;
count = 'a'; //compilation error
count = 5;
//======== enum ================
enum Color{Red=0, Green=1, Yellow=2}; // explicit define the value for each colour so when you need to add more value, you know where to add
var backgroundColor = Color.Green;
//======== type assertion, casting ========
let message1;
message1 = "abc";
//let endWithC = (<string> message1).endsWith('c');
//let endWithA = (message1 as string).endsWith('a');
//console.log(endWithC);
//console.log(endWithA);

//======== arrow function ========
let log1 = function(message){
    console.log(message);
}
let log2 = (message) => console.log(message);
let log3 = ()=> console.log(message);


////======== object ========
let point1 = new Point();
point1.X = 50;
point1.Y = 100;
point1.draw();

//========interface ======
interface Point_Interface{
    x : number;
    y: number;
    draw():void; 
}
function drawPoint(point : Point){
    console.log(point.X);
    console.log(point.Y);
}
var point = {"x":4,"y":5}

//========implement a like button ======
var likeButton = new LikeButton();
while(1){
    likeButton.onClick();
    console.log(likeButton.LikeCount);
    console.log(likeButton.IsSelected);
}
