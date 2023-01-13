// When Button A is pressed audio will play
input.onButtonPressed(Button.A, function () {
    music.playMelody("C D G F E D G C ", 268)
})
// When button B is pressed it generates a random number from 0-10, you can play it as a game.
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(randint(0, 10))
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
// When the Micro:bit is shaken the Heart will beat 8 times then go back to normal.
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(400)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
    }
    basic.showIcon(IconNames.Heart)
})
// When first started it shows a heart.
basic.showIcon(IconNames.Heart)
// Pin 0 on the Micro:bit is connected to a speaker.
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P0)
})
