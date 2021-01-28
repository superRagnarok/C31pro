const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
var umbrella;
var T1,T2,T3,T4;
var thunder;
var thunderCreatedFrame;
function preload(){
    T1=loadImage("1.png");
    T2=loadImage("2.png");
    T3=loadImage("3.png");
    T4=loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    
    var maxDrops=80;
    for(var i=0; i<maxDrops; i++){
        drops.push( new Drops (random(0,400),random(0,400),5));

    }
umbrella = new Umbrella();
    
}

function draw(){
    background(0);
    Engine.update(engine);

for(var i=0; i<drops.length; i++){
    drops[i].display();
    drops[i].update();
}
umbrella.display();
if(frameCount%100 === 0){
    thunder = createSprite(random(20,380),5,5,5);
    thunderCreatedFrame=frameCount;
    var r=Math.round(random(1,4));
    switch(r){
        case 1: thunder.addImage(T1);
        break;
        case 2 : thunder.addImage(T2);
        break;
        case 3: thunder.addImage(T3);
        break;
        case 4: thunder.addImage(T4);
    }
thunder.scale=0.6;
}
if (thunderCreatedFrame+20===frameCount){
    thunder.destroy();
}
drawSprites();
}   