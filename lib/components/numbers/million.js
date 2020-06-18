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
exports.Million = void 0;
var basefactory_1 = require("../factory/basefactory");
var Million = /** @class */ (function (_super) {
    __extends(Million, _super);
    function Million(_value, _template) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this._template = _template;
        _this._stringNumber = '';
        return _this;
    }
    Million.prototype.build = function (child) {
        var _next = Number.parseFloat(this._template[9]) +
            Number.parseFloat(this._template[10]) +
            Number.parseFloat(this._template[11]) +
            Number.parseFloat(this._template[12] + Number.parseFloat(this._template[13] + Number.parseFloat(this._template[14])));
        if (this._value === 1) {
            this._stringNumber = ' MILHÃO' + (_next > 0 ? ' E' : '');
        }
        else if (this._value > 1) {
            this._stringNumber = ' MILHÕES' + (_next > 0 ? ' E' : '');
        }
        return this;
    };
    Million.prototype.getString = function () {
        this.build();
        return this._stringNumber;
    };
    return Million;
}(basefactory_1.BaseFactory));
exports.Million = Million;
