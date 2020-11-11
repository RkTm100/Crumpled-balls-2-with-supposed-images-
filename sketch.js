
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxS1,boxS2,boxS3,boxImage, boxSprite
var paper1

function preload(){
boxImage=loadImage("sprites/dustbingreen.png")








}





function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
    world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	boxSprite=createSprite(850,490,35,150);
  boxSprite.addImage(boxImage);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

  
   boxS1=createSprite(790,585,35,150)
   boxS1.visible=false
   box=Bodies.rectangle(790,585,35,300, {isStatic:true} ); 
  
  boxS2=createSprite(980,585,35,150)
box2=Bodies.rectangle(980,585,35,300, {isStatic: true});
boxS2.visible=false
  boxS3=createSprite(900,643,189,35)
  boxS3.visible=false
  box3=Bodies.rectangle(900,643,189,35, {isStatic: true}); 
   paper1= new Paper(200,450,30);
  
   World.add(world,box)
   World.add(world,box2)
   World.add(world,box3)


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(200);
  paper1.display();
  ground.display;
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){

		 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130, y:-100});
	}
}

