const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var boy,boyimages;
var night
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3;
var umbrella;



function preload(){
    boyimages=loadImage("walking_1.png","walking2.png","walking3.png","walking4.png",
    "walking5.png","walking6.png","walking7.png","walking8.png")
    thunder=loadImage("thunder1.png")
    thunder2=loadImage("thunder2.png")
    thunder3=loadImage("thunder3.png")
    night=loadImage("night.jpg")
}


function setup(){
   night=createSprite(width/2,height/2,60,60)
   night.addImage(night)
   night.velocityx=-5
  
   boy=createSprite(520,420,30,30)
   boy.addAnimation(boyimages) 
   boy.scale=0.6

   engine.Engine.create()
   world=engine.world

umbrella=new Umbrella(670,420)


    createCanvas(800,800)

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1500), random(0,800)));
        }

    }




}



function draw(){
     Engine.update(engine);
    background(0); 
    drawSprites();


rand = Math.round(random(1,4));
thunderFrame=frameCount;
thunder=createSprite(random(1500,150),random(10,30),9,9)
switch(rand){
    case 1: thunder.addImage(thunder1);
    break;
    case 2: thunder.addImage(thunder2);
    break; 
    case 3: thunder.addImage(thunder3);
    break;
    case 4: thunder.addImage(thunder4);
    break;
    default: break;
}
thunder.scale = random(0.3,0.5)
}




    /*if (night.position.x < 0){
        night.position.x = night.width/2;
      }

      if(thunderFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }*/
    for(var i = 1; i<maxDrops; i++){
        drops[i].displaydrop();
        drops[i].update()

}   

