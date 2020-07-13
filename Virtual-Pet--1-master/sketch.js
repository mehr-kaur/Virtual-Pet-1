//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;

function preload() {
  
    //load images here
    this.image = loadImage("images/dogImg.png");
    this.image = loadImage("images/dogImg1.png");
  
}

var dog, database, foodS, foodStock;
//image variables
var  dogImg,dogImg1;

function preload() {
  
    //load images here in a variable
    dogImg= loadImage("images/dogImg.png");
    dogImg1= loadImage("images/dogImg1.png");
  
}

// sequence of coding

function setup() {

  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250, 250);
  dog.addImage("startingpoint", dogImg);
dog.scale=0.15;
  


  console.log(database);
  
  console.log("food")

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

}


