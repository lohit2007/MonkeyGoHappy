var bananaImage, obstacleImage,obstacleGroup,score, backImage, player_running;
var player, obstacle, banana, back, ground;

function preload(){
  bananaImage = loadImage ("banana.png");
  
  obstacleImage = loadImage ("stone.png");
  
  backImage = loadImage ("jungle.png");
  
  player_running = loadAnimation ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
}
function setup() {
  createCanvas(400, 400);
  back = createSprite (200,200);
  back.addImage (backImage);
  
  player = createSprite(50,335);
  player.addAnimation("monkey", player_running);
  
  obstacle = createSprite();
  obstacle.addImage(obstacleImage);
  
  banana = createSprite();
  banana.addImage(bananaImage);
  
  ground = createSprite(380,200,400,10);
  ground.visible = false;
  
  score = 0;
}

function draw() {
  background(220);
  
  text("Score: "+ score, 300,50);
  drawSprites();
}
