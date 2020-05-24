const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var paper,dustbin,rim1,rim2,ground,rope1,world,engine;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

    paper = new CrumpledPaper(350,120,20,"pink");

    dustbin = new Dustbin(600,375,100,20); 
    
    rim1 = new Dustbin(555,280,10,170);

    rim2 = new Dustbin(645,280,10,170);

    ground = new Ground(400,390,800,10);

    rope1 =  new Rope(paper.body,{x: 150, y: 120})
    
    Engine.run(engine);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  paper.display();
  dustbin.display();
  ground.display(); 
  rope1.display();
  rim1.display();
  rim2.display();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    rope1.fly();
}