var Miles , MilesImage;
var KingPin , KingPinImage; 
var gameOver , gameOverImage;

function preload(){
  MilesImage = loadImage("Images/Miles-Morales.png");
  KingPinImage = loadImage("Images/KINGPIN.png");
  gameOverImage = loadImage("Images/gameOver.png");
}
function setup() {
  createCanvas(400,400);
var Miles = createSprite(100, 200, 50, 50);
Miles.addImage(MilesImage);
Miles.scale = 0.2;

var KingPin = createSprite(400, 200, 50, 50);
KingPin.addImage(KingPinImage);
KingPin.scale = 0.1;
}

function draw() {
  background(255,255,255);
  if(keyDown("RIGHT_ARROW")){
    Miles.velocityX = 2;
  }
  if(keyDown("LEFT_ARROW")){
    Miles.velocityX = -2;
  }
  if(keyDown("UP_ARROW")){
    Miles.velocityY = -2;
  }
  if(keyDown("DOWN_ARROW")){
    Miles.velocityY = 2;
  }
  if(keyDown("DOWN_ARROW")){
    Miles.velocityY = 2;
  }
  if(Miles.isTouching(KingPin)){
    gameOver = createSprite(200,100,50,50);
    gameOver.addImage(gameOverImage);
    gameOver.scale = 0.1;
  }  
  drawSprites();
}