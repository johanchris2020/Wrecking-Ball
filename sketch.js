const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12,
    box13, box14, box15, box16, box18,box19, box17, box20;
    
function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, 600, 1200, 20);
    ball = new Ball(200,500,80);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    ball.display();
}