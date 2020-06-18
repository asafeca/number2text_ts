"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToString = void 0;
var number_service_1 = require("./components/service/number_service");
function NumberToString(value) {
    if (value >= 1000000000000000000 || value < 0) {
        return 'Not supported number';
    }
    else if (value === 0)
        return 'ZERO';
    else
        return number_service_1.NumberService.getInstance().numberWatching(value);
}
exports.NumberToString = NumberToString;
