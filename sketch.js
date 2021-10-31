const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow , snowFall;
var backgroundImg;



function setup() {
  createCanvas(1400, 800);
  Engine = engine.create();
  world = engine.world;

  ground = new Ground(1400 , 800 , 1200 , 10);
  snow = new Snow(100 , 70 , 30, 30);


}

function preload(){
  backgroundImg = loadImage("snow2.jpg");

}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
  snow.display();

  drawSprites();
  
  
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(snowball.body,{x:150 , y:100 })
  }
}