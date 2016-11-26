/*!
 * Gas Sensor Tessel Module
 *
 * Authors:
 *  - Exequiel Ceasar Navarrete <exequiel.navarrete09@gmail.com>
 *  - Ernesto Pile <erpile@yahoo.com>
 *
 * Licensed under MIT
 */

var tessel = require('tessel');

// module default options
var defaultOptions = {
  port: 'A', // A or B
  pin: 4, // 4 or 7
};

function GasSensor(options) {
  // specify default value to the options parameter
  // when no argument has been passed to the constructor
  if (typeof options === 'undefined') {
    options = {};
  }

  this.port = options.port || defaultOptions.port;
  this.pin = options.pin || defaultOptions.pin;

  // used by the setInterval
  this.readerTimer = null;
}

GasSensor.prototype.getGasLevel = function(cb) {
  tessel.port[this.port].pin[this.pin].analogRead(cb);
};

GasSensor.prototype.startReading = function(readInterval, cb) {
  var self = this;

  // stop any existing startReading calls if there is any.
  self.stopReading();

  // fire up the timer and save it internal id to the object instance.
  self.readerTimer = setInterval(function() {
    self.getGasLevel(cb);
  }, readInterval);
};

GasSensor.prototype.stopReading = function() {
  // stop the timer if there is any.
  if (this.readerTimer !== null) {
    clearInterval(this.readerTimer);
  }
};

module.exports = {
  use: function(options) {
    // specify default value to the options parameter
    // when no argument has been passed to the constructor
    if (typeof options === 'undefined') {
      options = {};
    }

    return new GasSensor(options);
  },

  GasSensor: GasSensor
};


