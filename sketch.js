const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var paper,dustbin,lid,ground,rope1,world,engine;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.World;

    paper = new CrumpledPaper(350,120,20);

    dustbin = new Dustbin(650,305,50,75); 
    
    lid = new Dustbin(650,295,70,10);

    ground = new Ground(400,200,800,10);

    rope1 =  new Rope(paper.body,{x: 300, y: 100})
    
    Engine.run(engine);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  mouseDragged();

  mouseReleased();

  paper.display();
  dustbin.display();
  ground.display(); 
  rope1.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body,{x: mouseX, y: mouseY})
}

function mouseReleased() {
    rope1.fly();
}