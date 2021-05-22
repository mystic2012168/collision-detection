function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  fixedrect.shapeColor="green"
movingrect = createSprite (400,200,80,30)
movingrect.shapeColor="green"
rect1=createSprite(400,300,30,30)
rect1.shapeColor="blue"
rect2= createSprite (600,300,30,30)
rect2.shapeColor="red"
}
function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  rect1.velocityX=2
  rect2.velocityX=-2
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
     movingrect.shapeColor="red"
     fixedrect.shapeColor="red"


  }
  else {
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
  }


  drawSprites();
}