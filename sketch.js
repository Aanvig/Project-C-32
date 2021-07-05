const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot, ground, polygon, backgroundImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var bg = "blue.jpg"

function preload() {
  changeBackground()
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  

  stand =new Ground(540, 280, 250, 10)
  ground = new Ground(400,396,802,10)

  box1 = new Box(470,255,30,40)
  box2 = new Box(501,255,30,40)
  box3 = new Box(532,255,30,40)
  box4 = new Box(563,255,30,40)
  box5 = new Box(594,255,30,40)

  box6 = new Box(501,215,30,40)
  box7 = new Box(532,215,30,40)
  box8 = new Box(563,215,30,40)

  box9 = new Box(532,174,30,40)

  polygon = new Polygon(150,200,30)

  slingshot = new SlingShot(polygon.body,{x:180, y:200})
  
  Engine.run(engine);

}

function draw() {
  background("gray");
  if(backgroundImg)
      background(backgroundImg);
  Engine.update(engine)

  //console.log(mouseX,mouseY)
  ground.display();
  stand.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()

  slingshot.display()
  polygon.display()

  drawSprites();
}

function mouseDragged(){
  Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32)
  slingshot.attach(polygon.body);
}

async function changeBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "blue.jpg";
  }
  else{
    bg = "cyan.jpg";
  }

  backgroundImg = loadImage(bg)
  console.log(backgroundImg)
}

