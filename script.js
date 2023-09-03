
// import colCheck from "./coCheck.js";

//image creation
    const marioPng ="./img/p2idle.png";
    const platformImage="./img/grassMid.png";
    const boxImage="./img/box.png";
    const boxCoin ="./img/boxCoin.png";
    const enemyImage="./img/slimeWalk1.png";
    const platFormNew ="./img/platFormNew.png";
    
    const imageCache={};
    function createImage(imgSrc){
        if(imageCache[imgSrc]){
            return imageCache[imgSrc]
        }else{
            const image = new Image();
            image.src=imgSrc;
            return image;
        }
    };

    
class Platform {
    constructor(x = 0, y = 350) {
        this.x = x,
            this.y = y,
            this.width = 50,
            this.height = 50,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "green"
    }

    draw() {
        
        if(!camera.camera){this.x +=camera.x;
            
        }else if(player.x>500&&keys["ArrowRight"]){
            this.x +=camera.x;}
            ctx.fillStyle = this.color;
        
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        // ctx.drawImage(createImage(platformImage),this.x,this.y,50,50);
    }
    reset(){
        this.x=0;
        this.y=350;
        this.width = 50,
            this.height = 50,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "green"
    }

};
class Enemy{
    constructor(x = 0, y = 0) {
        this.x = x,
            this.y = y,
            this.width = 40,
            this.height = 40,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "green"
    }

    draw() {
        ctx.fillStyle = this.color;
            this.x +=dx;
            if(keys["ArrowRight"]&&player.x>500){
                this.x +=dx;
            }
           
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(createImage(enemyImage),this.x,this.y,this.width,this.height);
    }
    reset(){
        this.x = 400,
            this.y = 350,
            this.width = 30,
            this.height = 30,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "black"
    }
}
class Brick {
    constructor(x = 0, y = 350) {
        this.x = x,
            this.y = y,
            this.width = 50,
            this.height = 50,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "red"
    }

    draw() {
        ctx.fillStyle = this.color;
        if(!camera.camera){this.x +=camera.x;
        }else if(player.x>500&&keys["ArrowRight"]){this.x +=camera.x;}
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(createImage(boxImage),this.x,this.y,this.width,this.height);
    }
    reset(){
        this.x = x,
            this.y = y,
            this.width = 50,
            this.height = 20,
            this.velX = 0,
            this.velY = 0,
            this.speed = 5,
            this.jumping = false,
            this.grounded = false,
            this.color = "red"
    }

};
//coin class creation
class Coins{
    constructor(x = 0, y = 350){
        this.x=x,
        this.y=y,
        this.width=35,
        this.height=35
    }
    draw(){
        if(!camera.camera){
            this.x +=camera.x;
        }else if(player.x>500&&keys["ArrowRight"]){
            this.x +=camera.x;
            
        }
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(createImage(boxCoin),this.x,this.y,this.width,this.height);
    }
    remove(){
        // platforms[this.x][this.y]=0;
        ctx.clearRect(this.x,this.y,this.width,this.height);
    }
}
//50*50 size tile canvas 800*400 "0 for empty 1 for platform tile 2 for brick 3 for coin"
var platforms = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    //every 16th tiles are next canvas 16/50 = 800 
];
var storedPlatform = [];
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d"),
    width = 800,
    height = 400,

    player = {
        x: 50,
        y: 100,
        width: 40,
        height: 50,
        velX: 0,
        velY: 0,
        speed: 5,
        jumping: false,
        grounded: false,
        color: "red",
       
        reset(){
        player.x= 50,
        player.y= 100,
        player.width= 40,
        player.height= 50,
        player.velX= 0,
        player.velY= 0,
        player.speed= 5,
        player.jumping= false,
        player.grounded= false,
        player.color= "red"
        }
        
    };


canvas.width = width;
canvas.height = height;
//
 const screenWidth = window.innerWidth;
 const screenHeight = window.innerHeight;
//
var camera = {
    x: 0,
    y: 0,
    camera:false
  };
var dx=2;
var cx=2;
var dy=0;
var px=0;
//platformnew move behind according player move
var platFormFront=0;
var platFormBack =15;
//

//
var jumpSound = new Audio("./sounds/Jump.mp3");

var coinCollectSound = new Audio("./sounds/coincollect.mp3");
var keys = [],
    friction = 0.8,
    gravity = 0.4;
var lastTimestamp = 0;

 //enemy creation  
 var enemy = new Enemy(400,350);
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (player.x > 500 ) {
        camera.x -=cx;
      }else if(player.x<2){
        // camera.x +=cx;
        player.x = 2
      } 
    
    //check keys
    // if(keys["ArrowRight"]&&player.x>500){
    //     platFormBack +=1;
    //     // platFormFront +=1;
    // }
    if (keys["ArrowRight"]) {
        if (player.velX < player.speed) {
            player.velX++;
        }

    } else if (keys["ArrowLeft"]) {
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
    if (keys["ArrowUp"]) {
        //jumping sound
        jumpSound.play();
        
        //jumping mechanism
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2.5;
        }
    }
    //player creation
    ctx.fillStyle = "blue";
    ctx.shadowColor="black";
    ctx.shadowBlur=20;
    ctx.shadowOffsetX=20;
    ctx.shadowOffsetY=10;
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    // player.image();
    ctx.drawImage(createImage(marioPng),player.x,player.y,player.width,player.height);
    player.velX *= friction;
    player.velY += gravity;
    player.x += player.velX;
    player.y += player.velY;
    player.grounded = false;
   //enemy property
   var out = colCheck(enemy,player);
   
    if(out == "t"||out=="b"||out=="l"||out=="r"){
        console.log("out");
        resetGame();
    }
  
    // enemy.x += dx;
    enemy.draw();
    
    //Render platform
  
    // for (let i = 0; i < platforms.length; i++) {
    //     for (let j =0; j <platforms[i].length; j++) {       

    //         if (platforms[i][j] == 1) {
                
    //             var platform = new Platform(j * 50, i * 50);
    //             platform.draw();
    //             // ctx.drawImage(createImage(platformImage),j*50,i*50,50,50);
    //             var dir = colCheck(player, platform);
    //             //after collision
    //             if (dir == "b") {
    //                 player.velY = 0;
    //                 player.grounded = true;
    //                 player.jumping = false;
    //             } else if (dir == "r" || dir == "l") {
    //                 player.velX = 0;
    //                 player.jumping = false;
    //             } else if (dir == "t") {
    //                 player.velY *= -1;
    //             }
    //            //
    //            var ene = colCheck(enemy,platform);
    //            if(ene =="l"||ene =="r"){
    //             dx= -dx;
                
    //         }
       
    //         }
    //         if (platforms[i][j] == 2) {
               
    //             //brick object creation
    //             var brick = new Brick(j * 50, i * 50);
    //             //camera view
                
                
    //             //brick creation
    //             brick.draw();
                
    //             //collision detection
    //             var col = colCheck(player, brick);
    //             //after collision
    //             if (col == "b") {
    //                 player.velY = 0;
    //                 player.grounded = true;
    //                 player.jumping = false;
    //             } else if (col == "r" || col == "l") {
    //                 player.velX = 0;
    //                 player.jumping = false;
    //             } else if (col == "t") {
    //                 player.velY *= -1;
    //             }
    //           } 
    //           //coins
    //           if(platforms[i][j]==3){
    //             ctx.fillStyle="yellow";
    //             var coins = new Coins(j*50,i*50);
    //             // console.log(coins.x, "coins.x");
    //             coins.draw();
    //             var coinCol= colCheck(player,coins);
              
    //            if(coinCol=="r"||coinCol=="l"||coinCol=="t"||coinCol=="b"){
    //             platforms[i][j]=0;
    //             //coin collects sound
    //             coinCollectSound.play();
    //             console.log("coin collected ");
    //            }
               
    //           }               
    //     }
    
  
    // }
      //render ends here
      //test render
   

    const visiblePlatforms = platforms.slice(
    (player.x - screenWidth / 2) / platforms.length,
    (player.x + screenWidth / 2) / platforms.length
    );

    platforms.forEach((platform) => {
    if (platform === 1) {
        // Do something with the platform
         var platform = new Platform(j * 50, i * 50);
                platform.draw();
    }
    });
    //test render ends here



    if (player.grounded) {
        player.velY = 0;
    }
    //set limit for camera view
    if (keys["ArrowLeft"]) {
        if (player.x < 1) {
            player.velX =0;
            
        }
    }else 
        if(player.x>=500){
            player.velX =-1;         
        }
    
    //set gameover fall limit
    if (player.y > canvas.height) {
        console.log("over");
        resetGame();
    }
//background 
//background go behind according player move

// ctx.drawImage(createImage(platFormNew),px,350);
//
    requestAnimationFrame(update);
}
update();




var left =false;
addEventListener("keydown", (e) => {
    keys[e.code] = true;
        left=true;
});
addEventListener("keyup", (e) => {
    keys[e.code] = false;
        left=false;
});
// touch
const btnup = document.getElementById("up");
const btnr = document.getElementById("right");
const btnl = document.getElementById("left");
btnup.addEventListener("touchstart",jumpUp);
btnup.addEventListener("touchend",jumpUpelse);
btnl.addEventListener("touchstart",goLeft);
btnl.addEventListener("touchend",goLeftelse);
btnr.addEventListener("touchstart",goRight);
btnr.addEventListener("touchend",goRightelse);
function jumpUp(event){
    event.preventDefault();
    keys["ArrowUp"] = true;
    left=true;
    console.log("up start",keys);
};
function jumpUpelse(event){
    event.preventDefault();
    keys["ArrowUp"] = false;
    left=true;
    console.log("up end",keys);
};
function goLeft(event){
    event.preventDefault();
    keys["ArrowLeft"] = true;
   
    console.log("left start");
};
function goLeftelse(event){
    event.preventDefault();
    keys["ArrowLeft"] = false;
  
    console.log("left end");
}
function goRight(event){
    event.preventDefault();
    keys["ArrowRight"] = true;
    
    console.log("right start");
};
function goRightelse(event){
    event.preventDefault();
    keys["ArrowRight"] = false;
    console.log("right end");
}

//
function resetGame(){

player.reset();
camera.x=0;
enemy.reset();

};

