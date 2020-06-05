// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var paper,dustbin,dustbin1,dustbin2,dustbin3,ground,chain;
var world,engine;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas =createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(620,450,1300,40);
    dustbin= new Bricks(900,340,150,200);
    paper = new Ball(400,100,60,60);
    
    dustbin1 = new Tanker(815,340,20,200);
    dustbin2 = new Tanker(900,450,150,20);
    dustbin3 = new Tanker(985,340,20,200);

    chain = new Launch(paper.body,{x:400,y:150});
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine);
    
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    
    dustbin.display();
    paper.display();

    chain.display();
}



function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}


