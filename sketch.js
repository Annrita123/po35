//Create variables here
var dog1,happyDog1,dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  happyDog1=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();


  dog=createSprite(250,300,0,0);
  dog.addImage(dog1);
  dog.scale=0.4;


  var foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  


background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog1)
}
  drawSprites();
  //add styles here
textSize(20);
fill('white');
stroke(1);
text("Note press UP_ARROW key to feed Drago milk",50,480)
textSize(30)
text("Remaining Food:",100,100)
}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
