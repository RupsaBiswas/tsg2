const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  ground=new Ground(400,height,800,20);
  //level one
  box1= new Box(330,235,30,40);
  box2= new Box(360,235,30,40);
  box3= new Box(390,235,30,40);
  box4= new Box(420,235,30,40);
  box5=new Box(450,235,30,40);

  //level two
  box6= new Box(360,195,30,40);
  box7= new Box(390,195,30,40);
  box8= new Box(420,195,30,40);

  //level three
  box9= new Box(390,155,30,40);
  box10=new Box(420,155,30,40);

  //top

  box11= new Box(420,110,30,40);


Engine.run(engine);
}

function draw() {

  Engine.update(engine);
  
  background(0);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  ground.display();



  drawSprites();
}