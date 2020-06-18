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
exports.Billion = void 0;
var basefactory_1 = require("../factory/basefactory");
var Billion = /** @class */ (function (_super) {
    __extends(Billion, _super);
    function Billion(_value, _template) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this._template = _template;
        _this._stringNumber = '';
        return _this;
    }
    Billion.prototype.build = function (child) {
        var _next = Number.parseFloat(this._template[6]) +
            Number.parseFloat(this._template[7]) +
            Number.parseFloat(this._template[8]) +
            Number.parseFloat(this._template[9]) +
            Number.parseFloat(this._template[10]) +
            Number.parseFloat(this._template[11]) +
            Number.parseFloat(this._template[12]) +
            Number.parseFloat(this._template[13]) +
            Number.parseFloat(this._template[14]);
        if (this._value === 1) {
            this._stringNumber = ' BILHÃO' + (_next > 0 ? ' E' : '');
        }
        else if (this._value > 1) {
            this._stringNumber = ' BILHÕES' + (_next > 0 ? ' E' : '');
        }
        return this;
    };
    Billion.prototype.getString = function () {
        this.build();
        return this._stringNumber;
    };
    return Billion;
}(basefactory_1.BaseFactory));
exports.Billion = Billion;
