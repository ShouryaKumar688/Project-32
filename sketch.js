const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJ = await response.json();

    // write code slice the datetime
    var dateTime = responseJ.datetime;
    var ourTime = dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset;
    console.log(ourTime);
    if (ourTime>=05&&ourTime<7){
        bg = "sunrise1.png";
    }
    if (ourTime>=07&&ourTime<9){
        bg = "sunrise2.png";
    }
    if (ourTime>=09&&ourTime<11){
        bg = "sunrise3.png";
    }
    if (ourTime>=11&&ourTime<13){
        bg = "sunrise4.png";
    }
    if (ourTime>=13&&ourTime<15){
        bg = "sunrise5.png";
    }
    if (ourTime>=15&&ourTime<17){
        bg = "sunrise6.png";
    }
    if (ourTime>=17&&ourTime<19){
        bg = "sunset1.png";
    }
    if (ourTime>=19&&ourTime<21){
        bg = "sunset2.png";
    }
    if (ourTime>=21&&ourTime<23){
        bg = "sunset3.png";
    }
    if (ourTime>=23&&ourTime==00){
        bg = "sunset4.png";
    }
    if(ourTime==00 && ourTime<03){
        bg = "sunset5.png";
    }
    if(ourTime>=03&&ourTime<05){
        bg = "sunset6.png";
    }
    console.log(bg);
    //else{
      //  bg = "sunset5.png";
    //}

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
