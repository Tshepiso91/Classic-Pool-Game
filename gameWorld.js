// Containing all the physical objects(ball, sticks, table and sounds) of the game
// Responsible for updating and Drawing them into the game
function GameWorld() {

    this.yellowBall = new Ball(new Vector2(413, 413))
    this.stick = new Stick()
}

GameWorld.prototype.update = function() {

    this.stick.update()
    this.yellowBall.update()
}

GameWorld.prototype.draw = function() {

    Canvas.drawImage(sprites.background, {x:0, y:0})

    this.stick.draw()
    this.yellowBall.draw()
}