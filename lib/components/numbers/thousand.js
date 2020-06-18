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
exports.Thousand = void 0;
var basefactory_1 = require("../factory/basefactory");
var Thousand = /** @class */ (function (_super) {
    __extends(Thousand, _super);
    function Thousand(_value, _template) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this._template = _template;
        _this._stringNumber = '';
        return _this;
    }
    Thousand.prototype.build = function () {
        var _next = Number.parseFloat(this._template[12]) +
            Number.parseFloat(this._template[13]) +
            Number.parseFloat(this._template[14]) +
            Number.parseFloat(this._template[15]) +
            Number.parseFloat(this._template[16]) +
            Number.parseFloat(this._template[17]);
        this._stringNumber = ' MIL' + (_next > 0 ? ' E ' : '');
        return this;
    };
    Thousand.prototype.getString = function (child) {
        this.build();
        return this._stringNumber;
    };
    return Thousand;
}(basefactory_1.BaseFactory));
exports.Thousand = Thousand;
