const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
  
    box1 = new Box(500,360,60,60);
    box2 = new Box(700,360,60,60);
    box3 = new Box(500,280,60,60);
    box4 = new Box(700,280,60,60);
  
    pig = new Pig(600,360);
    log = new Log(600,320,300,PI/2);
    pig2 = new Pig(600,280);
    log2 = new Log(600,240,300,PI/2);
    
    box5 = new Box(600,200,80,80);
    log3 = new Log(510,200,150,PI/7);
    log4 = new Log(690,200,150,-PI/7);
    
    bird = new Bird(300,100,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}