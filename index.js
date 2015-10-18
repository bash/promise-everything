/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

/**
 * Calls the given function with given arguments and a callback argument
 *
 * @param {Function} fn Function to be invoked. Please note that it must take a callback argument as last argument.
 * @param {...*} Variable number of arguments will be passed to the given callback
 * @example
 * // returns a Promise
 * require('promise-everything')(fs.readFile, 'index.js', 'utf8');
 *
 * @returns {Promise}
 */
module.exports = function (fn) {
  var args = [].slice.call(arguments, 1);

  if (typeof fn !== 'function') {
    return Promise.reject('fn must be a function');
  }

  return new Promise(function (resolve, reject) {
    var callArgs = args.concat(function (err, value) {
      if (err) {
        return reject(err);
      }

      resolve(value);
    });

    fn.apply(null, callArgs);
  });
};
