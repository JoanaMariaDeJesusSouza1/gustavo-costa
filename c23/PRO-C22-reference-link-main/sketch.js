const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =Matter.Body
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, tower, ground, cannon;
var angle = 20; 
var cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES);
  angle = 15;
  
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  cannonBall.display();
}

function keyReleased(){
  if (keyCode==DOWN_ARROW) {
    cannonBall.shoot();
  }
}