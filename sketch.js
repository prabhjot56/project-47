var crossBow ,dartboard, player,bg
var bgImg,crossBowImg,dartBoardImg,playerImg,hangingboardImg;
var PLAY=1;
var END=0
var gameState=PLAY;
var score=0;
var restart,gameOver;
var hangingboard,hangingboard1;


 

function preload(){
  bgImg=loadImage("bg.jpg");
  crossBowImg=loadImage("gun.jpg");
dartBoardImg=loadImage("dart board.PNG");
hangingboardImg=loadImage("hangingboards.PNG");
playerImg=loadImage("images.jpg");
restartIMG=loadImage("restart.jpg");
gameOverIMG=loadImage("gmover.jpg");
}
function setup() {
  createCanvas(1600,800);
 bg= createSprite(600, 200, 1600, 800);
 bg.addImage(bgImg);
 bg.scale=4;
 dartboard=createSprite(550,250,50,50);
 dartboard.addImage(dartBoardImg);
 dartboard.scale=0.2;

 player=createSprite(100,500,20,20);
 player.addImage(playerImg);
 player.scale=0.5;

 crossBow=createSprite(100,500,5,5);
 crossBow.addImage(crossBowImg);
 crossBow.scale=0.1;

 

 restart=createSprite(600,200);
 restart.addImage(restartIMG);
 restart.scale=0.2;
 restart.visible=false;



 gameOver=createSprite(800,200);
 gameOver.scale=0.2;
 gameOver.addImage(gameOverIMG);
 gameOver.visible=false;

     
hangingboard=createSprite(800,300,5,5);
hangingboard.addImage(hangingboardImg);
hangingboard.scale=0.2;
hangingboard.velocityX=9;

hangingboard1=createSprite(600,300,5,5);
hangingboard1.addImage(hangingboardImg);
hangingboard1.scale=0.2;
hangingboard1.velocityX=-9;


}

function draw() {
  background(0);  


  if(gameState===PLAY){
   if(keyDown("SPACE")){
    crossBow.x=mouseX;
    crossBow.y=mouseY;




 }
  
  edges=createEdgeSprites();
hangingboard.bounceOff(edges);
hangingboard1.bounceOff(edges);

   if(crossBow.isTouching(hangingboard)){
     gameState=END;
   }
  }
  else if(gameState===END){
    gameOver.visible=true;
    restart.visible=true;
    hangingboard1.velocityX=0;
    hangingboard.velocityX=0;

    if(mousePressedOver(restart)){
      reset();
    }
  }

  

  
  drawSprites();
   text("score:"+ score,100,50);
}


function reset(){
  gameState=PLAY;
  score=0;
  gameOver.visible=false;
  restart.visible=false;
  //hangingboard.destroy();
  //hangingboard1.destroy();
}