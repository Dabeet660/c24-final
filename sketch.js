const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin_side1, dustbin_side2;
var dustimg;
var placeholder;


function preload(){
	dustimg = loadImage("images/dustbingreen.png");
}



function setup() {
	createCanvas(800, 700);

	dustbin_side1 = createSprite(750,652,30,140);
	dustbin_side1.shapeColor = color(255,0,92);	
	
	dustbin_side2 = createSprite(630,652,30,140);
	dustbin_side2.shapeColor = color(255,0,92);	

	placeholder = createSprite(690,622,150,100);
	placeholder.addImage(dustimg);
	placeholder.scale = 0.4;

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(100,690,29);
    ground = new Ground(100,699,1900,50);

	Engine.run(engine);
  
}


function draw() {
  
  background(0, 255, 25)
  ball.display();
  ground.display();
  


  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:162,y:362})
	}
}

