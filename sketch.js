var pacMan
var lowerwall, leftwall, upperwall;
var allWalls
var sugardots
var walls = [
{x:500,y:450,w:1200,h:10},
{x:550,y:20,w:1200,h:10},
{x:15,y:235,w:10,h:450},
{x:70,y:50,w:80,h:20},
{x:70,y:100,w:80,h:20},
{x:70,y:150,w:80,h:20}
]
function setup() 
{
  createCanvas(1200,470);
pacMan=createSprite(350,350,20,20)
lowerwall= createSprite(550,450,1200,40)
upperwall= createSprite(550,20,1200,40)
leftwall= createSprite(15,235,40,390)
for(var i in walls){
var wall =
createSprite(walls[i].x,walls[i].y,walls[
i].w,walls[i].h)
}
}

function draw() 
{
background(51);
if(keyDown('right')){
  pacMan.x +=1
}

if (keyDown('left')){
  pacMan.x -=1
}

if (keyDown('up')){
  pacMan.y -=1
}

if (keyDown('down')){
  pacMan.y +=1
}


drawSprites();
}