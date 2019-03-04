export class LikeButton{
    private likeCount : number;
    private isSelected : boolean;
    constructor(){
        this.likeCount = 0;
        this.isSelected = false;
    }
    onClick(){
        this.likeCount += (this.IsSelected) ? -1 : 1;
        if(this.likeCount <= 0){
            this.likeCount = 0;
        }        
        this.isSelected = !this.isSelected;
    }
    get LikeCount(){
        return this.likeCount;
    }
    get IsSelected(){
        return this.isSelected;
    }
}