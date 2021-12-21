var rock,rockImg,rockC,rockCImg
var scissor,scissorImg,scissorC,scissorCImg
var paper,paperImg,paperC,paperCImg
var line
var player,scissorP,rockP,paperP




function preload(){
  rockImg = loadImage("rock.jpeg")
  scissorImg = loadImage("scissor.jpeg")
  paperImg = loadImage("paper.jpeg")

  scissorP = loadAnimation("scissor.jpeg")
  rockP = loadAnimation("rock.jpeg")
  paperP = loadAnimation("paper.jpeg")

  scissorC = loadAnimation("scissor.jpeg")
  rockC = loadAnimation("rock.jpeg")
  paperC = loadAnimation("paper.jpeg")
}

function setup(){
  createCanvas(400,400) 

  rock = createSprite(70,100)
  rock.addImage("rock",rockImg)
  rock.scale=0.45

  paper = createSprite(200,100)
  paper.addImage("paper",paperImg)
  paper.scale=0.4

  scissor = createSprite(320,100)
  scissor.addImage("scissor",scissorImg)
  scissor.scale=0.4

  line = createSprite(200,200,400,2)

  player = createSprite(280,320)
  player.addAnimation("rockPlayer",rockP)
  player.addAnimation("paperPlayer",paperP)
  player.addAnimation("scissorPlayer",scissorP)
  player.scale=0.4

  computer = createSprite(120,320)
  computer.addAnimation("rockComputer",rockC)
  computer.addAnimation("paperComputer",paperC)
  computer.addAnimation("scissorComputer",scissorC)
  computer.scale=0.4
}


function draw(){

  background(180);;

  fill("black")
  textSize(15)
  text("Select Your Choice",130,25)

  fill("black")
  textSize(15)
  text("Computer's Choice",60,250)

  fill("black")
  textSize(15)
  text("Player's Choice",230,250)



  if(mousePressedOver(scissor)){
    player.changeAnimation("scissorPlayer",scissorP)
  }

  if(mousePressedOver(paper)){
    player.changeAnimation("paperPlayer",paperP)
  }

  if(mousePressedOver(rock)){
    player.changeAnimation("rockPlayer",rockP)
  }

  var rand = Math.round(random(1,4));
  
  if (rand = 1){
    computer.changeAnimation("rockComputer",rockC)}

  if (rand = 2){
      computer.changeAnimation("scissorComputer",scissorC)}

  if (rand = 3){
    computer.changeAnimation("paperComputer",paperC)}

  drawSprites()
}

