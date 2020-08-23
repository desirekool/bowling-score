import BowlingGame from "../BowlingGame/BowlingGame";

export default class Utils {

    formatNumber(amount, options) {
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

    remCalc(pxValue) {
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

    createUID(length) {
        var len = length <= 8 ? length : 8;
        return Math.random().toString(36).substr(2, len);
    }
};








