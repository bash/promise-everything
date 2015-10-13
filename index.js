/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

/**
 *
 * @param {Function} fn
 * @param {...*}
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
