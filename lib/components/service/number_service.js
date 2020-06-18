"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberService = void 0;
var string_line_result_1 = require("./string_line_result");
var trillion_1 = require("../numbers/trillion");
var cents_1 = require("../numbers/cents");
var number_conversion_1 = require("./number_conversion");
var billion_1 = require("../numbers/billion");
var million_1 = require("../numbers/million");
var thousand_1 = require("../numbers/thousand");
var hundreds_1 = require("../numbers/hundreds");
var NumberService = /** @class */ (function () {
    function NumberService() {
        this._template = '';
        this.stringLineResult = string_line_result_1.StringLineResult.getInstance();
    }
    NumberService.getInstance = function () {
        if (!NumberService._instance) {
            NumberService._instance = new NumberService();
        }
        return NumberService._instance;
    };
    NumberService.prototype.numberWatching = function (value) {
        for (var x = 0; x < 18 - value.toFixed(2).length; x++) {
            this._template += '0';
        }
        this._template += value.toFixed(2).replace('.', '0');
        for (var k = 0; k <= 15; k += 3) {
            var _currentValue = this._template[k] + this._template[k + 1] + this._template[k + 2];
            this.stringLineResult.add(new number_conversion_1.NumberConvertion(Number.parseFloat(_currentValue)));
            if (k === 0) {
                if (Number.parseFloat(_currentValue) > 0) {
                    this.stringLineResult.add(new trillion_1.Trillion(Number.parseFloat(_currentValue), this._template));
                }
            }
            else if (k === 3) {
                if (Number.parseFloat(_currentValue) > 0) {
                    this.stringLineResult.add(new billion_1.Billion(Number.parseFloat(_currentValue), this._template));
                }
            }
            else if (k === 6) {
                if (Number.parseFloat(_currentValue) > 0) {
                    this.stringLineResult.add(new million_1.Million(Number.parseFloat(_currentValue), this._template));
                }
            }
            else if (k === 9) {
                if (Number.parseFloat(_currentValue) > 0) {
                    this.stringLineResult.add(new thousand_1.Thousand(Number.parseFloat(_currentValue), this._template));
                }
            }
            else if (k === 12) {
                if (Number.parseFloat(_currentValue) > 0) {
                    this.stringLineResult.add(new hundreds_1.Hundreds(Number.parseFloat(_currentValue), this._template));
                }
            }
            else if (k === 15) {
                var _cents = Number.parseFloat(this._template[16]) + Number.parseFloat(this._template[17]);
                if (_cents > 0) {
                    this.stringLineResult.add(new cents_1.Cents(Number.parseFloat(_currentValue), this._template));
                }
            }
        }
        var _data = this.stringLineResult.getString();
        var _repeated = _data.includes('UM') && _data.includes('MIL');
        if (_repeated) {
            _data = _data.substring(3);
        }
        return _data;
    };
    return NumberService;
}());
exports.NumberService = NumberService;
