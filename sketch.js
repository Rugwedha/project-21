
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground, leftside, rightside;
function preload() {

}

function setup() {
	createCanvas(1500, 800);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, 670, width, 20);
	leftside = new Ground(1100, 600, 20, 120);
	rightside = new Ground(1250, 600, 20, 120);
	//Create the Bodies Here.
	var ball_option = {
		isStatic: false,
		restitution: 0.3
	}
	ball = Bodies.circle(400, 250, 25, ball_option)
	World.add(world, ball);





}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	ground.show();
	leftside.show();
	rightside.show()
	ellipse(ball.position.x, ball.position.y, 25);

}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.098, y: -0.1});
	}
}
