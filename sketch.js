const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,log1,log2;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,500,70,70);
    box2 = new Box(600,500,70,70);
    box3 = new Box(400,350,70,70);
    box4 = new Box(600,350,70,70);
    ground = new Ground(200,height,1200,20)
    pig1=new Pig(500,500)
    log1=new Log(500,400,10,PI)
    log2=new Log(500,200,10,PI)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    pig1.display()
 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display()
    log2.display()
    console.log(box3)
}