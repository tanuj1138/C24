const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;


function preload(){
  bg= loadImage("images/bg.jpg");
 
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);






}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();

  rock1.show();
  
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();


  }
