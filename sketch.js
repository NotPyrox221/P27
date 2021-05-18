const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var chain1, chain2, chain3, chain4, chain5;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    roof=new Ground(400,250,230,20)
    bob1=new Bob(320,575,30)
    bob2=new Bob(360,575,30)
    bob3=new Bob(400,575,30)
    bob4=new Bob(440,575,30)
    bob5=new Bob(480,575,30) 
    
    chain1 =new Chain(bob1.body,roof.body,-80,0)
    chain2 =new Chain(bob2.body,roof.body,-40,0)
    chain3 =new Chain(bob3.body,roof.body, 00,0)
    chain4 =new Chain(bob4.body,roof.body, 40,0)
    chain5 =new Chain(bob5.body,roof.body, 80,0)

}


function draw(){
    background("white");
    Engine.update(engine);
    roof.display()
    bob1.display()
    bob2.display()
    bob3.display()
    bob4.display()
    bob5.display()
    chain1.display()
    chain2.display()
    chain3.display()
    chain4.display()
    chain5.display()
    

}
function keyPressed(){
    if(keyCode===UP_ARROW){Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-45})}
}
    

