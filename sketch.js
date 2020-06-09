var player;
var enemy,enemyImg;
var cover;
function preload() {
    enemyImg = loadImage("unnamed.png");
}
function setup() {
    createCanvas(displayWidth, displayHeight - 111);
    player = createSprite(displayWidth/2,displayHeight - 130,200,10);
    enemyGroup = createGroup();
    cover = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    cover.shapeColor = "red";
    cover.visible = false;
}
function draw() {
    background(220);
    if (frameCount % 80 === 0) {
        enemy = createSprite(player.x,displayHeight - displayHeight);
        enemy.velocityY = 15
        enemyGroup.add(enemy);
    enemy.addImage("missile",enemyImg);
    enemy.debug = true;
    enemy.setCollider("rectangle",0,0,20,350,0)
    enemy.depth = cover.depth - 1;
    }
      if (keyDown("left")) {
        player.x = player.x -15;
      }
      if (keyDown("right")) {
        player.x = player.x +15;
      }
      if (player.collide(enemyGroup)) {
        enemyGroup.destroyEach();
        player.destroy();
        cover.visible = true;

      }
      if (player.y > displayHeight - 130) {
        player.y = displayHeight - 130;
      }
      if (enemyGroup.y > player.y) {
        player.destroy();
      }
    drawSprites();
}