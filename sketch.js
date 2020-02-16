const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground;
var top1,top2,top3,gate;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,340,100,100);
    box2 = new Box(200,250,80,80);
    box3 = new Box(270,320,40,150);
    box4 = new Box(130,320,40,150);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();

    fill("red");
    top1 = triangle(150,220,200,120,250,220);
    top2 = triangle(245,245,270,175,295,245);
    top3 = triangle(105,245,130,175,155,245);
    fill("brown");
    gate = rect(200,365,50,50);
}