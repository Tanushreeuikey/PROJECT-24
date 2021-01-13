
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,ball;

function preload()
{
	
}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var option1=
	{    	
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.5
		
	}
	 ball = Matter.Bodies.circle(100,400,20,option1)
	 World.add(world,ball);
	 
	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color("yellow")
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1=new Dustbin(550,600,20,100);
	 box2=new Dustbin(650,600,20,100);
	 box3=new Dustbin(600,640,120,20);

     //ball=new Paper(100,400,20)
	 Engine.run(engine);
  
}


function draw() 
{
  background(0)
  Engine.update(engine);
   rectMode(CENTER);

   box1.display()
   box2.display()
   box3.display()
   //ball.display()
   ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,20,20)
    
   //keyPressed();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:72,y:-72})

	}
}

