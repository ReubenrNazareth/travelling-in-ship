var ship,ship_moving,edges;
var oceanImage,invisibleGround ; 

function preload(){
  ship_moving =  loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  oceanImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1200,400);

  ocean=createSprite(50,90,200,10);
  ocean.addImage("ocean" ,oceanImage);
  ocean.x = ocean.width/2 ;

  ship=createSprite (50,160,50,50);
  ship.addAnimation("moving", ship_moving); 
        
  ship.scale = 0.5;
  ship.x =  800;

}

function draw() {
    background("blue");
    ocean.velocityX = 2 ;            

    if(ocean.x >1200){
      ocean.x = 0 ;
    }

    drawSprites();
} 

