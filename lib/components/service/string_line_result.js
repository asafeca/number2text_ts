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
exports.StringLineResult = void 0;
var basefactory_1 = require("../factory/basefactory");
var StringLineResult = /** @class */ (function (_super) {
    __extends(StringLineResult, _super);
    function StringLineResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._children = Array();
        _this._convertedString = '';
        return _this;
    }
    StringLineResult.getInstance = function () {
        if (!StringLineResult._instance) {
            StringLineResult._instance = new StringLineResult();
        }
        return StringLineResult._instance;
    };
    StringLineResult.prototype.add = function (child) {
        this._children.push(child);
    };
    StringLineResult.prototype.build = function (child) {
        var _this = this;
        this._children.map(function (data) { return (_this._convertedString += data.getString()); });
        return this;
    };
    StringLineResult.prototype.getString = function () {
        this.build();
        return this._convertedString;
    };
    return StringLineResult;
}(basefactory_1.BaseFactory));
exports.StringLineResult = StringLineResult;
