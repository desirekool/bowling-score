function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
            var i = 0;

            var F = function () {};

            return {
                s: F,
                n: function () {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function (e) {
                    throw e;
                },
                f: F
            };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function () {
            it = o[Symbol.iterator]();
        },
        n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function (e) {
            didErr = true;
            err = e;
        },
        f: function () {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function formatNumber(amount, options) {
    var defaultOptions = {
        decimalCount: 2,
        decimalSep: ',',
        thousandsSep: '.'
    };
    defaultOptions = Object.assign(defaultOptions, options);

    try {
        var decimalCount = isNaN(defaultOptions.decimalCount) ? 2 : Math.abs(defaultOptions.decimalCount);
        var negativeSign = amount < 0 ? '-' : '';
        var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        var j = i.length > 3 ? i.length % 3 : 0;
        var thousands = j ? i.substr(0, j) + defaultOptions.thousandsSep : '';
        var hundreds = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1".concat(defaultOptions.thousandsSep));
        var floats = decimalCount ? defaultOptions.decimalSep + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '';
        return "".concat(negativeSign + thousands + hundreds + floats);
    } catch (e) {
        console.error(e);
    }
}

function remCalc(pxValue) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
    var rem;

    if (typeof pxValue === 'string') {
        var remArray = [];
        var valueArray = pxValue.split(' ');

        var _iterator = _createForOfIteratorHelper(valueArray),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;
                remArray.push("".concat(value / base, "rem"));
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }

        rem = remArray.join(' ');
    } else {
        rem = "".concat(pxValue / base, "rem");
    }

    return rem;
}

function createUID(length) {
    var len = length <= 8 ? length : 8;
    return Math.random().toString(36).substr(2, len);
}

export {createUID, formatNumber, remCalc};







