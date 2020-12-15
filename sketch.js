
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,chain1,chain2,chain3,chain4,chain5;



function setup() {
	createCanvas(1600, 700);
engine = Engine.create();
	world = engine.world;
  var bobDiameter=40;
  
  render=Render.create({
  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
}
  );

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new BOB(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new BOB(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new BOB(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new BOB(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new BOB(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
 roofObject=new GROUND(width/2,height/4,width/7,20);
 chain1=new CHAIN(bobObject1.body,roofObject.body,-bobDiameter*2, 0);

 chain2=new CHAIN(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
 chain3=new CHAIN(bobObject3.body,roofObject.body,0, 0);
 chain4=new CHAIN(bobObject4.body,roofObject.body,bobDiameter*1, 0);
 chain5=new CHAIN(bobObject5.body,roofObject.body,bobDiameter*2, 0);
 
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  //Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
 
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	chainBodyOffset=constraint.pointB;
	
	chainBodyX=chainBodyPosition.x+chainBodyOffset.x
	roofBodyY=chainBodyPosition.y+chainBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, chainBodyX,chainBodyY);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}