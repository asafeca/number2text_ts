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
exports.Trillion = void 0;
var basefactory_1 = require("../factory/basefactory");
var Trillion = /** @class */ (function (_super) {
    __extends(Trillion, _super);
    function Trillion(value, _template) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this._template = _template;
        _this._stringnumber = '';
        return _this;
    }
    Trillion.prototype.build = function (child) {
        var _next = Number.parseFloat(this._template[3]) +
            Number.parseFloat(this._template[4]) +
            Number.parseFloat(this._template[5]) +
            Number.parseFloat(this._template[6]) +
            Number.parseFloat(this._template[7]) +
            Number.parseFloat(this._template[8]) +
            Number.parseFloat(this._template[9]) +
            Number.parseFloat(this._template[10]) +
            Number.parseFloat(this._template[11]) +
            Number.parseFloat(this._template[12]) +
            Number.parseFloat(this._template[13]) +
            Number.parseFloat(this._template[14]);
        if (this.value === 1) {
            this._stringnumber = ' TRILHÃO' + (_next > 1 ? ' E' : '');
        }
        else if (this.value > 1) {
            this._stringnumber = ' TRILHÕES' + (_next > 1 ? ' E' : '');
        }
        return this;
    };
    Trillion.prototype.getString = function () {
        this.build();
        return this._stringnumber;
    };
    return Trillion;
}(basefactory_1.BaseFactory));
exports.Trillion = Trillion;
