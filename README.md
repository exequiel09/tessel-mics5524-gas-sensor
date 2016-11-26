# GAS SENSOR
Driver for the Adafruit MiCS5524 CO, Alcohol and VOC Gas Sensor.
The hardware documentation for this module can be found [here](https://learn.adafruit.com/adafruit-mics5524-gas-sensor-breakout).


### Installation
```
npm install tessel-mics5524-gas-sensor --save
```

### Example
```js
/*********************************************
This basic gas sensor example
*********************************************/

var gasSensor = require('tessel-mics5524-gas-sensor');

// automatically create the new instance of the GasSensor class
var gasSensorInstance = gasSensor.use();

// start reading values
gasSensorInstance.startReading(200, function(error, value){
  console.log(value);
});

// stop reading values after 5s
setTimeout(function(){
  gasSensorInstance.stopReading();
}, 5000);
```

### Methods

#### gasSensorInstance.getGasLevel(cb)  
Get the current gas level.  

#### gasSensorInstance.startReading(readInterval, cb)  
Start reading the gas level in the specified time interval

#### gasSensorInstance.stopReading(cb)  
Stops reading the gas level

### Licensing  
MIT
