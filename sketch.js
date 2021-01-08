var PLAY = 1;
var END = 1;
var gameState = 1;

var score;

var sword,swordImage;

function preload(){
swordImage = loadImage("sword.png")
 fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png")
  
}
function setup(){
  createCanvas(600,600);
sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;

 
  fruitGroup = createGroup();
  enemyGroup = createGroup();
}
function draw(){
  background("pink");
fruits();
Enemy();
  
  if(gameState==PLAY){
    
    sword.x = World.mouseX;
    sword.y = World.mouseY;
  }
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score = score +2;
     text("score = 0",500,60);
  
  
  drawSprites();
}
function fruits(){
  if(World.frameCount%80===0){
     fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    } else if (r==2) {
      fruit.addImage(fruit2);
    } else if (r==3) {
      fruit.addImage(fruit3);
    } else if (r==4) {
      fruit.addImage(fruit4);
    }
    
    fruit.y = Math.round(random(50,340));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
     }
}

function Enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    
    enemyGroup.add(monster);
  }
}