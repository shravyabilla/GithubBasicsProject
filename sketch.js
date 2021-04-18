var bananaImage, obstacleImage, obstacle_group, backgroundImage, score

function preload() {
  backgroundImage = loadImage("jungle.jpg");
  
  player_running = 
loadAnimation = ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_04.png", 
"Monkey_06.png", "Monkey_07.png", "Monkey_08.png",
"Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
   backg = createSprite(200, 200)
   backg.addImage(backg, "backgoundImage");
   backg.velocityX = -3;
  
   monkey = createSprite(100, 300);
   monkey.addAnimation(Monkey, "player_running");
  
   foodGroup = createGroup(200, 200);
   foodGroup.addImage(banana, "bananaImage");
   
}

function draw() {
  background(220);

  if (backg.x < 35) {
    backg.x = backg.width/2;
  }
    
  if (foodGroup.isTouching(monkey)) {
   score = score + 2;
   foodGroup.destroyEach();
  }
  
}