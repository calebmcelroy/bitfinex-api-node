'use strict'

var last = 0;

module.exports = () => {
  var microtime = process.hrtime();
  var nonce = (microtime[0]*1e15)+microtime[1]; //nanoseconds
  last++;
  nonce+last;
  return nonce;
}
