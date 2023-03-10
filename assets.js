let sprites = {};
let assetsStillLoading = 0;

function assestLoadingLoop(callback) {
    if(assetsStillLoading) {
        requestAnimationFrame(assestLoadingLoop.bind(this, callback))
    } else {
        callback()
    }
}

function loadAssets(callback){

    function loadSprite(fileName) {
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;
     
        spriteImage.onload = function(){
         assetsStillLoading--;
        }
     
        return spriteImage;
    }
   
    sprites.background = loadSprite("spr_background4.png")
    sprites.stick = loadSprite('spr_stick.png')
    sprites.yellowBall = loadSprite('spr_yellowBall2.png')

    assestLoadingLoop(callback)
}