var garden,rabbit;
var gardenImg,rabbitImg;
var path,leaf,grass,orangeleaf,redimage;
var pathImg,leafImg,grassImg,orangeleafImg,redimageImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  pathImg = loadImage("path.png");
  leafImg = loadImage("leaf.png");
  grassImg = loadImage("grass.png");
  orangeleafImg = loadImage("orangeleaf.png");
  redimageImg = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}
var select_sprites = Math.round(random(1,2));
  if (frameCount % 80 == 0){
    if (select_sprites == 1){
      //call create apples function
    }
    else {
      //call createLeaves function
    }
  }
function createApples() {
  apple=createSprite(random(50,30),40,10,10);
  //Add image to apple sprite
  apple.addImage(appleImage);
  //Scale the sprite if required

  //Give the velocity so that the apples move downwards
  //Give lifetime to the apple sprite
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}