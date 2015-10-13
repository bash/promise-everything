/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

/**
 *
 * @param {Function} fn
 * @param {*} args
 * @returns {Promise}
 */
export default function(fn, ...args) {
    if (typeof fn !== 'function') {
        return Promise.reject('fn must be a function');
    }

    return new Promise((resolve, reject) => {
        fn(...args, (error, value) => {
            if (error) {
                return reject(error);
            }

            resolve(value);
        });
    });
}