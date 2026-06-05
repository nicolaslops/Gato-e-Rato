var gardenimg;
var gato,gatoparado,gatoandando,gatofinal;
var rato,ratoparado,ratomexendo,ratofinal;



function preload() {
    gardenimg = loadImage("images/garden.png") ;
    gatoparado =loadImage("images/cat1.png");
    gatoandando= loadAnimation("images/cat2.png","images/cat3.png")
    gatofinal = loadImage("images/cat4.png");

    ratoparado=loadImage("images/mouse1.png");
    ratomexendo=loadAnimation("images/mouse2.png","images/mouse3.png");
    ratofinal=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(800,600);
    gato = createSprite(600,500);
    gato.addImage("parado",gatoparado);
    gato.addAnimation("andando",gatoandando);
    gato.addImage("final",gatofinal);
    gato.scale = 0.1

    rato = createSprite(100,500);
    rato.addImage("stop",ratoparado);
    rato.addAnimation("mexendo",ratomexendo);
    rato.addImage("end",ratofinal)
    rato.scale = 0.1
    rato.setCollider("circle", 0, 0, 140);
}

function draw() {

    background(gardenimg);
    if (gato.overlap(rato)) {
        gato.velocityX = 0;
        gato.changeAnimation("final");
        rato.changeAnimation("end");
        gato.x = 200;
    }
    drawSprites();
}


function keyPressed(){

  if (keyDown("space")){
  gato.velocityX = -3;
  gato.changeAnimation("andando");
  rato.changeAnimation("mexendo");
  }


}
