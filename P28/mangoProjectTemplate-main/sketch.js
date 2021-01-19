
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, stone1;
var world,boy, released, slingshot1, mangoPos;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1125, 150, 20);
	mango3 = new mango(950, 250, 25);
	mango4 = new mango(1110, 200, 20);
	mango5 = new mango(975, 100, 30);
	stone1 = new Stone(235, 310, 50);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	released = false;
	slingshot1 = new Slingshot(stone1.body, {x:235, y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone1.display();
	groundObject.display();
	slingshot1.display();
	dropMango(stone1, mango1);
	dropMango(stone1, mango2);
	dropMango(stone1, mango3);
	dropMango(stone1, mango4);
	dropMango(stone1, mango5);
}
function mouseDragged(){
	if(released === false){
		Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
		slingshot1.attach(stone1.body);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420});
		slingshot1.attach(stone1.body);
		released = false;
	}
}
function mouseReleased(){
	slingshot1.fly();
	released = true;
}
function dropMango(stoneIn, mangoIn){
	mangoPos = mangoIn.body.position;
	stonePos = stoneIn.body.position;
	var distance = sqrt((mangoPos.x - stonePos.x)**2 + (mangoPos.y - stonePos.y)**2);
	//console.log(mangoIn.r);
	if(distance <= mangoIn.r + 50){
		console.log("the mango has been hit");
		Matter.Body.setStatic(mangoIn.body, false);
	}
}