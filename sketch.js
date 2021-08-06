
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Dustbin(400,680,800,20)
 
  Engine.run(engine);
  
 dustbin1 = new Dustbin(600,650,200,20); 
  dustbin2 = new Dustbin(500,600,20,100);
  dustbin3 = new Dustbin(700,600,20,100);
  paper = new Paper(50,600,20)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
 ground.display()
 paper.display()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-85})
   }
 }


