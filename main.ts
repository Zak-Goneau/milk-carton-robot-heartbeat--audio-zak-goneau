input.onButtonPressed(Button.A, function () {
    music.playMelody("C D G F E D G C ", 268)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(randint(0, 10))
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(400)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
    }
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P0)
})
