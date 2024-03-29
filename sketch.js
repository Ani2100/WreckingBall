const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(800,200,70,70);
    box7 = new Box(800,250,70,70);
    box8 = new Box(800,180,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,220,70,70);
    box11 = new Box(700,200,70,70);
    box12 = new Box(700,180,70,70);
    box13 = new Box(700,150,70,70);
    box14 = new Box(700,120,70,70);
    
    

    
    

    bird = new Bird(100,100);
    stick = new SlingShot(bird.body,{x:500, y:50})

}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display(); 
    box14.display();
    
    bird.display();
    stick.display();
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}