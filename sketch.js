
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var plank;
var slingshot1,slingshot2,slingshot3,slingshot4,slingshot5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball1 = new Circle(50,530,50);
ball2 = new Circle(400,600,50);
ball3 = new Circle(500,600,50);
ball4 = new Circle(600,600,50);
ball5 = new Circle(700,600,50);
plank = new Plank(500,100,700,100);
slingshot1 = new Line(ball1.body,{x:300,y:100}); 
slingshot2 = new Line(ball2.body,{x:400,y:100}); 
slingshot3 = new Line(ball3.body,{x:500,y:100}); 
slingshot4 = new Line(ball4.body,{x:600,y:100}); 
slingshot5 = new Line(ball5.body,{x:700,y:100}); 

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  plank.display();
  slingshot1.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();

 
}



