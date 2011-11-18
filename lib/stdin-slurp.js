/*!
* stream-slurp
* Copyright(c) 2011 Hideaki Ohno <hide.o.j55{at}gmail.com>
* MIT Licensed
*/

/**
 * Library version.
 */

exports.version = '0.0.1';

exports.slurp = function(cb) {
  var stream, cb;
  switch(arguments.length) {
    case 1:
      stream = process.stdin;
      cb = arguments[0];
      break;
    case 2:
      stream = arguments[0];
      cb = arguments[1];
      break;
    default:
      throw new Error("Invalid arguments");
  }
  stream.resume();
  var data = '';
  stream.on('data', function(buf) {
    data += buf;
  });
  stream.on('error', function(e) {
    cb(e);
  });
  stream.on('end', function() {
    cb(null, data);
  });
};
