serial.writeLine("starting...")
serial.writeLine("Press A to show temperature")
serial.writeLine("If sensor is connected it should show the temperature")
serial.writeLine("If sensor is NOT connected it should show -Infinity (for temp) and an error message")

input.onButtonPressed(Button.A, function () {
    serial.writeString("temp = ")
    serial.writeNumber(dstemp2wire.celsius(DigitalPin.P0))
    serial.writeString("\n")
//      basic.showNumber(dstemp2wire.celsius(DigitalPin.P0))
})

dstemp2wire.sensorError(function (ErrorMessage, ErrorCode, Port) {
    serial.writeString("\n");
    serial.writeString(ErrorMessage);
    serial.writeString(" code=");
    serial.writeNumber(ErrorCode);
    serial.writeString(" port=");
    serial.writeNumber(Port);
    serial.writeString("\n");
//    basic.showString("err")
//    basic.showNumber(ErrorCode)
})

basic.forever(function () {
    serial.writeString("temp = ")
    serial.writeNumber(dstemp2wire.celsius(DigitalPin.P0))
    serial.writeString("\n")
    basic.pause(500)
})
