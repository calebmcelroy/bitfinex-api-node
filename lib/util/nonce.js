'use strict'

module.exports = () => {
  var microtime = process.hrtime();
  var nonce = (microtime[0]*1e4)+microtime[1]; //make a precise number, js max number is 9007199254740992
  return nonce;
}
