scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    if (info.score() == 1) {
        Token_2 = sprites.create(img`
            . . f f f f . . 
            . f 9 9 9 9 f . 
            f 9 9 8 8 9 9 f 
            f 9 8 9 9 1 9 f 
            f 9 8 9 9 1 9 f 
            f 9 9 1 1 9 9 f 
            . f 9 9 9 9 f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Snail, sprites.castle.tilePath9)
        tiles.placeOnRandomTile(Token_2, sprites.castle.tilePath7)
        tiles.setTilemap(tilemap`層級2`)
    } else {
        game.splash("Find the token", "Then come back")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (info.score() == 3) {
        game.over(true)
    } else {
        game.splash("Find the token", "Then come back")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles28, function (sprite, location) {
    if (info.score() == 2) {
        Token_3 = sprites.create(img`
            . . f f f f . . 
            . f a a a a f . 
            f a a c c a a f 
            f a c a a b a f 
            f a c a a b a f 
            f a a b b a a f 
            . f a a a a f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Snail, sprites.dungeon.darkGroundEast)
        tiles.placeOnRandomTile(Token_3, sprites.dungeon.darkGroundSouthEast0)
        tiles.setTilemap(tilemap`層級4`)
    } else {
        game.splash("Find the token", "Then come back")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Token.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
let Token_3: Sprite = null
let Token_2: Sprite = null
let Token: Sprite = null
let Snail: Sprite = null
Snail = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 9 c . . 
    . . . . . . c 6 9 9 9 9 6 c . . 
    . . c c . c 6 c c 9 9 9 9 9 c . 
    . b 5 5 c 6 c 5 5 c 9 9 9 9 9 c 
    . f f 5 c 6 c 5 f f 9 9 9 9 9 c 
    . f f 5 c 6 c 5 f f 6 9 9 9 c c 
    . b 5 5 9 c 9 5 5 c 6 6 6 6 c c 
    . . b 5 5 9 5 5 c 9 9 9 9 9 9 c 
    . c c 5 5 5 5 5 b c c 9 9 9 9 c 
    c 5 5 4 5 5 5 4 b 5 5 c 9 9 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
Token = sprites.create(img`
    . . f f f f . . 
    . f 7 7 7 7 f . 
    f 7 7 6 6 7 7 f 
    f 7 6 7 7 1 7 f 
    f 7 6 7 7 1 7 f 
    f 7 7 1 1 7 7 f 
    . f 7 7 7 7 f . 
    . . f f f f . . 
    `, SpriteKind.Food)
controller.moveSprite(Snail)
scene.cameraFollowSprite(Snail)
tiles.setTilemap(tilemap`層級1`)
tiles.placeOnRandomTile(Snail, sprites.castle.tilePath6)
tiles.placeOnRandomTile(Token, sprites.castle.tilePath3)
