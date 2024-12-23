input.onSound(DetectedSound.Loud, function () {
    lightOn = !(lightOn)
    if (lightOn) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showString("DAY")
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showLeds(`
            . # # . .
            . . # # .
            . . # # .
            . . # # .
            . # # . .
            `)
        basic.showString("NIGHT")
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
let lightOn = false
input.setSoundThreshold(SoundThreshold.Loud, 179)
