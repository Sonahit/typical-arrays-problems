exports.min = function min(array) {
    if (!array || !Array.isArray(array) || !array.length) {
        return 0;
    }
    return Math.min.apply(null, array);
};

exports.max = function max(array) {
    if (!array || !Array.isArray(array) || !array.length) {
        return 0;
    }
    return Math.max.apply(null, array);
};

/**
 *
 * @param {*} array
 */
exports.avg = function avg(array) {
    if (!array || !Array.isArray(array) || !array.length) {
        return 0;
    }
    return array.reduce((avg, n) => avg + n, 0) / array.length;
};
