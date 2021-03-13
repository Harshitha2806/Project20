var car, wall;
var speed, light;

function setup()
 {
  createCanvas(1600,400);
  //Creating sprites and giving them properties 
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

 //Giving cars random speed
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
 
 if(wall.x-car.x < (car.width+wall.width)/2)
 {
car.velocityX=0;

var deformation=0.5 * weight *speed * speed/22509;
 
if(deformation>180)
  {
      car.shapeColor= color(225,0,0);
  }

  if(deformation<180 && deformation>100)
  {
      car.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
      car.shapeColor=color(0,225,0);
  }
 }
 
 
  drawSprites();
}







 /* var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 
  drawSprites();
} 
function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object2.y - object1.y < object1.height/2 + object2.height/2
  && object1.y - object2.y < object1.height/2 + object2.height/2){
  object2.velocityY = object2.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}

}