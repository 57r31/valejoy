// ==UserScript==
// @name         valetudo joystick control
// @version      0.1
// @author       57r31
// @match        http://192.168.1.43
// @grant        none
// ==/UserScript==

//window.addEventListener("gamepadconnected", (joy) => console.log(joy.gamepad));

function joyControl() {
    try {

        const Y = navigator.getGamepads()[0].axes[2].toFixed(2)
        const X = navigator.getGamepads()[0].axes[1].toFixed(2)

        const btns = navigator.getGamepads()[0].buttons
        const CTRL = btns[0].pressed || btns[1].pressed

        if (window.manualControlEnabled) {
            if (CTRL) {
                window.stopManualControl()
                return
            }

            window.manualMoveRobot(Y*-2,X/-4)
        } else {
            if (CTRL) {
                window.startManualControl()
                return
            }

        }
    } catch(e) {}
}

const haveJoy = navigator.getGamepads()
if (!haveJoy || haveJoy.length === 0) return
else setInterval(joyControl, 300)



