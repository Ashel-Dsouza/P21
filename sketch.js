var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
    musicSound = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(800,600);

    block1 = createSprite(81,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(287,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(493,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 4;
}

function draw() 
{
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
        ball.shapeColor = "blue";
        musicSound.play();
        ball.velocityX=0
        ball.velocityY=0
        
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2))
    {
        ball.shapeColor = "orange";
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3))
    {
        ball.shapeColor = "red";
    }
    
     if(block4.isTouching(ball)&& ball.bounceOff(block4))
     {
         ball.shapeColor = "green";
     }  

    drawSprites();
}
    