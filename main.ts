basic.forever(function () {
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
    BEP.setLedColor(0x00FF00)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
})
