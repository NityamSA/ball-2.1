
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, ball1,groundObject	
var world;
var box,ballimage;

function preload(){
box=loadImage("bin.png")
ballimage=loadImage("paper.png")

}


function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	ball1=new ball(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//dustbinObj.addImage(box);
	ball1.addImage(ballimage)

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  ball1.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
    
  	}
}





