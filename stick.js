const STICK_ORIGIN = new Vector2(970,11)

function Stick(position) {
    this.position = position;
    this.origin = new Vector2(500, 10)
}

Stick.prototype.update = function() {

    this.position = Mouse.position

    if(Mouse.left.pressed) {
        console.log('Pressed left');
    }
}

Stick.prototype.draw = function() {
    Canvas.drawImage(sprites.stick, this.position, this.origin)
}