

var tower,towerImg;
var  door,doorImg;
var climber,climberImage,climberGroup;
var ghost, ghostImg;
var gm;
var invisibleblock, invisibleBlockGroup;
var gameState = "play";
var gameOverImage,restartImage;
var gameOver,restart;
var music,music2;

function preload(){
  towerImage=loadImage("tower.png") 
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
   ghostImage=loadImage("ghost-standing.png")
   gameOverImage=loadImage("gameover.jpg")
  restartImage=loadImage("power.png")
   music=loadSound("At Rest (mp3cut.net).mp3")
    music2=loadSound("Rise-Of-The-Titan mp3.m4a")
   bImage=loadImage("monotype-ghost.png")
  
}
  function setup() {
  createCanvas(600, 600);
    
    
    
    
    tower=createSprite(300,300);
    tower.addImage("tower",towerImage);
    tower.velocityY=1
    
    ghost=createSprite(200,200,50,50);
    ghost.addImage("ghost",ghostImage);
    ghost.scale=0.4;
    
   
    
  doorsGroup=new Group();
   climberGroup=new Group();
   invisibleBlockGroup = new Group();
  
    music.play()
   
  
    
  }



function draw() {
  background(0)
  
   if (gameState==="play"){
  
    
     
 if (tower.y>400){
   tower.y=300
     }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
     }
  
   if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
     }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
    
     }
  
   if(keyDown("space")){
    ghost.velocityY=-5
    
     }
     
   ghost.velocityY = ghost.velocityY + 0.2
     
     if(climberGroup.isTouching (ghost)) {
    ghost.velocityY = 0;
  }
     
     spawndoors();
      
 if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
   ghost.destroy();
   music2.play();
    
   gameState = "end";
  
     
     
   } 
  drawSprites();
   
}

if (gameState==="end"){
 background("black")
   stroke("yellow");
    fill("yellow");
    textSize(30);
    text("   Great you played well but Gameover", 6,220);
   text(" Reload the page if u want to play again👻☠", 6,290);
   music.stop()
    
 
  
}
  
  
}

function spawndoors(){
  
  if(frameCount%240===0) {
    
      var door=createSprite(200,50);
      var climber=createSprite(200,100)
      var  invisibleBlock = createSprite(200, 105);
    invisibleBlock.width= climber.width;
  invisibleBlock.height = 2;
    
    
    door.x=Math.round(random(120,400));
      climber.x=door.x;
     invisibleBlock.x = door.x;
      
    
     door.addImage(doorImage);
     climber.addImage(climberImage);
    
      
    
     door.velocityY= 1;
     climber.velocityY= 1;
    invisibleBlock.velocityY = 1;
    
    
     ghost.depth = door.depth;
    ghost.depth = ghost.depth +1;
    
     door.lifetime=800;
     climber.lifetime=800;
    invisibleBlock.lifetime=800;
    
    doorsGroup.add(door);
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);
    climberGroup.add(climber)
     
    
     }
  
  
  
}
