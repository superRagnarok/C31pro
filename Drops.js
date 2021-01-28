class Drops {
    constructor(x,y,r){
var options = {
    restitution:0,
    friction:1.0
}
this.body = Bodies.circle(x,y,r,options);
this.r=5;
World.add(world,this.body);

    }
    display(){
push();
translate(this.body.position.x,this.body.position.y);
ellipseMode(RADIUS);
        fill("blue");
        stroke(0);
        ellipse(0,0,this.r,this.r);
pop();
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400), y : random(0,400)})
        }
    }
}