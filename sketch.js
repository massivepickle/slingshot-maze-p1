const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
var p1,p2;
var connect;
var game = "launch";

function mouseDragged(){
  if(game === "launch"){
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  connect.bodyA = null;
  game = "over";
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  p1 = new Ground(400,390,800,20);
  p2 = new Ground(600,200,150,10);

  b1 = new Box(150,250,20,20);
  b2 = new Box(570,160,20,20);
  b3 = new Box(590,160,20,20);
  b4 = new Box(610,160,20,20);
  b5 = new Box(630,160,20,20);
  b6 = new Box(580,110,20,20);
  b7 = new Box(600,110,20,20);
  b8 = new Box(620,110,20,20);
  b9 = new Box(590,50,20,20);
  b10 = new Box(610,50,20,20);
  b11 = new Box(600,0,20,20);

  var options = {
    bodyA: b1.body,
    pointB: {x:150,y:250},
    stiffness: 0.2,
    length: 40
  }

  connect = Constraint.create(options);
  World.add(world,connect);
}

function draw() {
  background("black");  
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  p1.display(); 
  p2.display();
}
