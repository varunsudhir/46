var bg,bgImg
var ss,ss1
var alien,a1,a2,a3,a4,a5,a6,a7
var alienGroup,laserGroup
var laser
var score=0
var gameState="play"
function preload(){
  bgImg=loadImage("assets/bg4.jpg")
  ss1=loadImage("assets/ss1.png")
  a1=loadImage("assets/a1.png")
  a2=loadImage("assets/a2.png")
  a3=loadImage("assets/a3.png")
  a4=loadImage("assets/a4.png")
  a5=loadImage("assets/a5.png")
  a6=loadImage("assets/a6.png")
  a7=loadImage("assets/a7.png")
  
}

function setup(){
  createCanvas(1400,600)
 //bg=createSprite(0,0,1400,600)
 //bg.addImage(bgImg)
 //bg.scale=3.7
}

function draw() {
  background(bgImg);
  
  drawSprites();
}
