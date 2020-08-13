var banana, obstacle, player, back, score;

var bananaImage, obstacleImage, playerImage, backImage;

function preload(){
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png.png")
  
  playerImage = loadAnimation                  ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  backImage = loadImage("jungle.png")
  
}

function setup() {
  createCanvas(400, 400);
  
  banana = createSprite("200,200")
  banana.addAnimation("banana1",bananaImage)
  
  obstacle = createSprite("200,100")
  obstacle.addAnimation("obstacle1",obstacleImage)

  
  player = createSprite("150,150")
  player.addAnimation("player1",playerImage)
  
  back = createSprite("100,200")
  back.addAnimation("back1",backImage)  
  
  score = 0;
  
}

function draw() {
  background(220);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}