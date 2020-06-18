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
exports.Cents = void 0;
var basefactory_1 = require("../factory/basefactory");
var Cents = /** @class */ (function (_super) {
    __extends(Cents, _super);
    function Cents(_value, _template) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this._template = _template;
        _this._stringNumber = '';
        return _this;
    }
    Cents.prototype.build = function (child) {
        if (this._value === 1) {
            this._stringNumber = ' CENTAVO';
        }
        else if (this._value > 1) {
            this._stringNumber = ' CENTAVOS';
        }
        return this;
    };
    Cents.prototype.getString = function () {
        this.build();
        return this._stringNumber;
    };
    return Cents;
}(basefactory_1.BaseFactory));
exports.Cents = Cents;
