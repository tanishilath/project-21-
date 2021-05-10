var canvas;
var block1,block2,block3,block4,block5;
var ball, edges;
var music;
var m1,m2,m3,m4;
function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(1000,700);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "orange";

    block5 = createSprite(900,580,200,30);
    block5.shapeColor = "violet";

    m1 = createSprite(198,580,10,30);
    m1.shapeColor = "black";

    m2 = createSprite(398,580,10,30);
    m2.shapeColor = "black";

    m3 = createSprite(598,580,10,30);
    m3.shapeColor = "black";

    m4 = createSprite(798,580,10,30);
    m4.shapeColor = "black";

    ball = createSprite(random(80,750),100, 40,40);
    ball.shapeColor = ("Turquoise");
    ball.velocityX = 8;
    ball.velocityY = -9;
    //write code to add velocityX and velocityY

}
function preload(){
    music=loadSound("music.mp3");
}
function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        music.play();
    }
    if (block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = "green";
        music.play();
    }
    if (block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "orange";
    }
        if (block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "violet";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        }
    drawSprites();
}
