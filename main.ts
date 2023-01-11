input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("C D G F E D G C ", 268)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(400)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
    }
})
