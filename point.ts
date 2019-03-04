//======== class ========
export class Point{
    private x : number;
    private y : number;
    constructor(private _x?:number, private _y?:number){
        this.x = _x;
        this.y = _y;
    }
    get X(){
        return this.x;
    }
    get Y(){
        return this.y;
    }
    set X(value:number){
        this.x = value;
    }
    set Y(value:number){
        this.y = value;
    }
    draw(){
        console.log(this.x);
        console.log(this.y);
    }
    getDistance(){
        console.log(this.y - this.x);
    }
}