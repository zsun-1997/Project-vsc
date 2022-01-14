"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/**
 * Bad Data Error, when request params are incorrect
 * Maps to a 400 HTTP code
 */
class BadDataError extends _1.BaseError {
    /**
       * Constructs a new BadDataError
       * @param message describing what went wrong
       * @param code to be appended to 'error.bad-data.'
       */
    constructor(message, code, targets) {
        super(message, `bad-data.${code}`, 400, targets);
    }
}
exports.default = BadDataError;
//# sourceMappingURL=badData.error.js.map