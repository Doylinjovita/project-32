const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1;
var block1,block2,block3,
block4,block5,block6,block7,
block8,block9,block10,block11,block12
,block13,block14,block15,block16;

var polygon,slingShot;

var score=0;


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;



  stand1=new Ground(490,300,250,10);
  stand2=new Ground(400,600,1200,10);

  block1=new Box(400,275,30,40);
  block2=new Box(430,275,30,40);
  block3=new Box(460,275,30,40);
  block4=new Box(490,275,30,40);
  block5=new Box(520,275,30,40);
  block6=new Box(550,275,30,40);
  block7=new Box(580,275,30,40);

  block8=new Box(430,235,30,40);
  block9=new Box(460,235,30,40);
  block10=new Box(490,235,30,40);
  block11=new Box(520,235,30,40);
  block12=new Box(550,235,30,40);

  block13=new Box(460,195,30,40);
  block14=new Box(490,195,30,40);
  block15=new Box(520,195,30,40);

  block16=new Box(490,155,30,40);

  polygon=new Polygon(150,100,20,6);
  
  slingShot=new SlingShot(polygon.body,{x:150,y:200})



}

function draw() {
  background(0); 
  Engine.update(engine);

  textSize(35);
  fill(255);
  text("SCORE:"+score,width-300,50);

  stand1.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();

  slingShot.display();
  polygon.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(polygon.body);
  }
}

