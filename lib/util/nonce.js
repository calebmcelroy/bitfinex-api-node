'use strict'

var last = 0;

module.exports = () => {
  var microtime = process.hrtime();
  var nonce = (Date.now()*1e11)+microtime[1]; //nanoseconds
  last++;
  nonce+last;
  return nonce;
}
