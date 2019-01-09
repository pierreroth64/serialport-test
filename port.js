const SerialPort = require("serialport");
const port = new SerialPort("/dev/tty.usbserial-14101", {
  autoOpen: false,
  baudRate: 115200
});

port.open(err => {
  if (err) {
    console.log("Error opening port: ", err.message);
  }
  console.log("yes! opened!");
});
