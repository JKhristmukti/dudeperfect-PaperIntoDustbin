const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var paper,dustbin,lid,ground,rope,world,engine;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.World;

    paper = new CrumpledPaper(350,120,20);

    dustbin = new Dustbin(650,305,50,75); 
    
    lid = new Dustbin(650,295,70,10);

    ground = new Ground(400,200,800,10);

    rope =  new Rope(paper.body,{x: 300, y: 100})
    
    Engine.run(engine);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  mouseDragged();

  mouseReleased();

  if (isTouching(paper.body,lid.body)) {
    Matter.Body.setPosition(paper.body,{x: 350, y: 120})
  }

  paper.display();
  dustbin.display();
  ground.display(); 
  rope.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body,{x: mouseX, y: mouseY})
}

function mouseReleased() {
    rope.shoot();
}

function isTouching(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true    
}
return false
}