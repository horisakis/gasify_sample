var hello = require('./hello');
global.callHello = function () { // `global`オブジェクトに関数を代入する
  return hello();
}

