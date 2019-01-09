# serialport: segfault test report

Cannot open a port anymore with [serialport](https://www.npmjs.com/package/serialport) => **a segmentation fault occurs!!!** :(

## Steps to reproduce

1. edit `port.js` and change the port name
2. `rm -rf node_modules && rm package-lock.json && npm install`
3. `DEBUG=* node port.js` and a segmentation fault occurs! Here's the console output: `[1] 16897 segmentation fault node port.js`
4. edit `package.json` and change `serialport` version, go to 2.

## Failures

### on MacOS

- OS:
  - system: macOS 10.14.2 (18C54)
  - kernel: Darwin 18.2.0
- node: 8.12.0
- npm: 6.4.1

**fails** with serialport versions >= 7.0.1

**works** with serialport version 6.2.2 (displays `'yes! opened!'` )

### on Ubuntu

- OS:
  - system: Ubuntu Ubuntu 16.04.5
  - kernel: Linux ux501 4.15.0-43-generic #46~16.04.1-Ubuntu SMP Fri Dec 7 13:31:08 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
- node: v8.9.1
- npm: 6.5.0

**fails** with serialport versions >= 7.0.1

**works** with serialport version 6.2.2 (displays `'yes! opened!'` )
