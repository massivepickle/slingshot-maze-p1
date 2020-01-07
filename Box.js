class Box{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.1,
            density: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}