
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj
var leftSide
var rightSide


function preload()
{
	
}

function setup() {
	createCanvas(1300, 1000);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2
	}
	//Create the Bodies Here.
ball = Matter.Bodies.circle(50,100,20,options)
World.add(world,ball)
	Engine.run(engine);
  
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display()
  leftSide.display()
  rightSide.display()
  drawSprites();
 
}



