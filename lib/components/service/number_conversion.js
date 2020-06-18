"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberConvertion = void 0;
var basefactory_1 = require("../factory/basefactory");
var NumberConvertion = /** @class */ (function (_super) {
    __extends(NumberConvertion, _super);
    function NumberConvertion(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this._stringNumber = '';
        return _this;
    }
    NumberConvertion.prototype.build = function (child) {
        if (this._value > 0 && this._value < 1) {
            this._value *= 100;
        }
        var _template = '';
        var _leng = '000'.length - this._value.toString().length;
        if (_leng <= 0) {
            _template = this._value.toFixed(2).replace('.', '');
        }
        else {
            for (var k = 0; k <= _leng - 1; k++) {
                _template += '0';
            }
            _template += this._value.toString();
        }
        var a = Number.parseInt(_template[0], 10);
        var b = Number.parseInt(_template[1], 10);
        var c = Number.parseInt(_template[2], 10);
        if (a === 1) {
            this._stringNumber += b + c === 0 ? 'CEM' : 'CENTO';
        }
        else if (a === 2) {
            this._stringNumber += 'DUZENTOS';
        }
        else if (a === 3) {
            this._stringNumber += 'TREZENTOS';
        }
        else if (a === 4) {
            this._stringNumber += 'QUATROCENTOS';
        }
        else if (a === 5) {
            this._stringNumber += 'QUINHENTOS';
        }
        else if (a === 6) {
            this._stringNumber += 'SEISCENTOS';
        }
        else if (a === 7) {
            this._stringNumber += 'SETECENTOS';
        }
        else if (a === 8) {
            this._stringNumber += 'OITOCENTOS';
        }
        else if (a === 9) {
            this._stringNumber += 'NOVECENTOS';
        }
        if (b === 1) {
            if (c === 0) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DEZ';
            }
            if (c === 1) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'ONZE';
            }
            if (c === 2) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DOZE';
            }
            if (c === 3) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'TREZE';
            }
            if (c === 4) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'CATORZE';
            }
            if (c === 5) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'QUINZE';
            }
            if (c === 6) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DEZASSEIS';
            }
            if (c === 7) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DEZASSETE';
            }
            if (c === 8) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DEZOITO';
            }
            if (c === 9) {
                this._stringNumber += (a > 0 ? ' E ' : '') + 'DEZANOVE';
            }
        }
        else if (b === 2) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'VINTE';
        }
        else if (b === 3) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'TRINTA';
        }
        else if (b === 3) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'TRINTA';
        }
        else if (b === 4) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'QUARENTA';
        }
        else if (b === 5) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'CINQUENTA';
        }
        else if (b === 6) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'SESSENTA';
        }
        else if (b === 7) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'SETENTA';
        }
        else if (b === 8) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'OITENTA';
        }
        else if (b === 9) {
            this._stringNumber += (a > 0 ? ' E ' : '') + 'NOVENTA';
        }
        if (b !== 1 && c !== 0 && this._stringNumber !== '') {
            this._stringNumber += ' E ';
        }
        if (b !== 1) {
            if (c === 1) {
                this._stringNumber += 'UM';
            }
            else if (c === 2) {
                this._stringNumber += 'DOIS';
            }
            else if (c === 3) {
                this._stringNumber += 'TRÊS';
            }
            else if (c === 4) {
                this._stringNumber += 'QUATRO';
            }
            else if (c === 5) {
                this._stringNumber += 'CINCO';
            }
            else if (c === 6) {
                this._stringNumber += 'SEIS';
            }
            else if (c === 7) {
                this._stringNumber += 'SETE';
            }
            else if (c === 8) {
                this._stringNumber += 'OITO';
            }
            else if (c === 9) {
                this._stringNumber += 'NOVE';
            }
        }
        return this;
    };
    NumberConvertion.prototype.getString = function () {
        this.build();
        return this._stringNumber;
    };
    return NumberConvertion;
}(basefactory_1.BaseFactory));
exports.NumberConvertion = NumberConvertion;
