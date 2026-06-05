var gardenimg;
var gato, gatoparado, gatoandando, gatofinal;
var rato, ratoparado, ratomexendo, ratofinal;

function preload() {
  gardenimg = loadImage("assets/img/garden.png");
  gatoparado = loadImage("assets/img/cat1.png");
  gatoandando = loadAnimation("assets/img/cat2.png", "assets/img/cat3.png");
  gatofinal = loadImage("assets/img/cat4.png");

  ratoparado = loadImage("assets/img/mouse1.png");
  ratomexendo = loadAnimation("assets/img/mouse2.png", "assets/img/mouse3.png");
  ratofinal = loadImage("assets/img/mouse4.png");
}

function setup() {
  createCanvas(800, 600);
  gato = createSprite(600, 500);
  gato.addImage("parado", gatoparado);
  gato.addAnimation("andando", gatoandando);
  gato.addImage("final", gatofinal);
  gato.scale = 0.1;

  rato = createSprite(100, 500);
  rato.addImage("stop", ratoparado);
  rato.addAnimation("mexendo", ratomexendo);
  rato.addImage("end", ratofinal);
  rato.scale = 0.1;
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

function keyPressed() {
  if (keyDown("space")) {
    gato.velocityX = -3;
    gato.changeAnimation("andando");
    rato.changeAnimation("mexendo");
  }
}
