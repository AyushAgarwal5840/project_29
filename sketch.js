const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14;


function preload() {
 
}








function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height-5,1200,20);
  ground3 = new Ground(1300,0,200,2500);
  ground1 = new Ground(480,400,250,15)
  ground2 = new Ground(950,280,250,15)
  //Ground1 Boxes
//bottom most boxes
  box1 = new Box(380,357,40,70);
  box2 = new Box(430,357,40,70);
  box3 = new Box(480,357,40,70);
  box4 = new Box(530,357,40,70);
  box5 = new Box(580,357,40,70);
// 2nd row boxes

box6 = new Box1(430,285,40,70);
box7 = new Box1(480,285,40,70);
box8 = new Box1(530,285,40,70);
//top most box
box9 = new Box2(480,213,40,70);


// Ground2 Boxes
//Bottom most Boxes
box10 = new Box(850,235,40,70);
box11 = new Box(900,235,40,70);
box12 = new Box(950,235,40,70);
box13 = new Box(1000,235,40,70);
box14 = new Box(1050,235,40,70);

// 2nd row boxes
box15 = new Box1(900,160,40,70);
box16 = new Box1(950,160,40,70);
box17 = new Box1(1000,160,40,70);
//top most box
box18 = new Box2(950,86,40,70);
 
bird = new Bird(500,100);

slingshot = new SlingShot(bird.body,{x:180, y:250});
}

function draw() {
  background("rgb(55, 43, 43)");  
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

slingshot.display(); 
bird.display(); 


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}