const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;


function setup() {
  var canvas=createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  ground=new Grounds(400,400,800,10);
  stand=new Grounds(400,300,400,30);
  box1=new Boxes(400,260,60,40);
  box2=new Boxes(465,260,60,40);
  box3=new Boxes(530,260,60,40);
  box4=new Boxes(335,260,60,40);
  box5=new Boxes(270,260,60,40);
  box6=new Boxes(335,215,60,40);
  box7=new Boxes(400,215,60,40);
  box8=new Boxes(465,215,60,40);
  box9=new Boxes(370,170,60,40);
  box10=new Boxes(435,170,60,40);
  box11=new Boxes(405,125,60,40);
  polygons=new Polygon(200,300,50);
  
  slingshot=new sling(polygons.body,{x:300,y:100});
  

  

}

function draw() {
  background("white");  
  Engine.update(engine);
  ground.display();
  stand.display();
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
  polygons.display();
  slingshot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
