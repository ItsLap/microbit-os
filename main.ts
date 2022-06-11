function goHome () {
    list = [images.createImage(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `), images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `), images.createImage(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)]
    homeactive = 1
}
input.onButtonPressed(Button.A, function () {
    if (homeactive == 1) {
        listnum += -1
    }
})
function launchApp () {
	
}
input.onButtonPressed(Button.AB, function () {
    if (homeactive == 1) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (homeactive == 1) {
        listnum += 1
    }
})
let listnum = 0
let homeactive = 0
let list: Image[] = []
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Whole))
if (input.buttonIsPressed(Button.AB)) {
    basic.showString("Hello!")
} else {
    goHome()
}
basic.forever(function () {
    if (listnum < list.length) {
        if (listnum == -1) {
            listnum = 0
        } else {
            if (homeactive == 1) {
                list[listnum].showImage(0)
            }
        }
    } else {
        listnum = 0
    }
})
