var ship;
var seaImg;
var shipImg1;
var shipImg2;
var sea;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  shipImg2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png"); 
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3
  sea.velocityX = -4;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;

}

function draw() {
  background("blue");
  if(keyDown("space")) { ship.addAnimation("movingShip",shipImg2); }

  if(sea.x<0){
    sea.x = 200;
}
  
 drawSprites();
}