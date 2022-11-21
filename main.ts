function MovePlayer (sprite: game.LedSprite, num: number) {
    Player.move(num)
}
input.onButtonPressed(Button.A, function () {
    MovePlayer(Player, 1)
})
input.onButtonPressed(Button.B, function () {
    MovePlayer(Player, -1)
})
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
basic.forever(function () {
	
})
