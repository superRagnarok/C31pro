class Umbrella {
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(200,600,110,options);
        this.image=loadImage("walking_8.png");
World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,300);
    }

}