input.onButtonPressed(Button.A, function () {
    start = 1
})
let distanta = 0
let start = 0
basic.showIcon(IconNames.Asleep)
start = 0
basic.forever(function () {
    if (start == 1) {
        wuKong.setAllMotor(100, 100)
        distanta = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
        if (distanta >= 4 && distanta <= 10) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            wuKong.stopAllMotor()
            basic.pause(200)
            wuKong.setAllMotor(-100, -100)
            basic.pause(500)
            wuKong.stopAllMotor()
            basic.pause(200)
            wuKong.setAllMotor(100, -100)
            basic.pause(400)
            wuKong.stopAllMotor()
        }
    }
})
