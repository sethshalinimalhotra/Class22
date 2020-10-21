var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var World = Matter.World;
var object;
var engine, world;
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
object = Bodies.rectangle(200,200,50,50);
World.add(world,object);
console.log(object);
}

function draw() {
  background(255,255,255); 
  rectMode(CENTER);
 rect(200,200,50,50);
  drawSprites();
}