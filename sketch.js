var fixed,moving;


function setup() {
  createCanvas(400,400);
  fixed = createSprite(200, 10, 50, 50);
  fixed.shapeColor = "green";
  fixed.velocityY = 3;


  moving = createSprite(200,390,50,50);
  moving.shapeColor = "green";
  moving.velocityY = -3;
}

function draw() {
  background(220);
  
  //moving.x = World.mouseX;
 // moving.y= World.mouseY;


  /*if (moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2 
    && fixed.y - moving.y <fixed.height/2 + moving.height/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2 
    ){
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";


  } else {
    moving.shapeColor = "green";
    fixed.shapeColor = "green";

  }*/ 

 if (moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2){
      fixed.velocityX = fixed.velocityX* (-1);
      moving.velocityX = moving.velocityX* (-1);

    }
    if (fixed.y - moving.y <fixed.height/2 + moving.height/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2 ){
      fixed.velocityY = fixed.velocityY* (-1);
      moving.velocityY = moving.velocityY* (-1);

    }




  drawSprites();
}