# segfault test report

## Steps to reproduce

1. edit `port.js` and change the port name
2. `rm -rf node_modules && rm package-lock.json && npm install`
3. `DEBUG=* node port.js` and a segmentation fault occurs! Here's the console output: `[1] 16897 segmentation fault node port.js`
4. edit `package.json` and change `serialport` version, got to 2.

## Failures

### on MacOS

- MacOS:
  - system: macOS 10.14.2 (18C54)
  - kernel : Darwin 18.2.0
- node: 8.12.0
- npm: 6.4.1

**fails** with serialport versions >= 7.0.1

**works** with serialport version 6.2.2 (displays `'yes! opened!'` )
