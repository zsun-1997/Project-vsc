"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base Error for all Errors to extend
 */
class BaseError extends Error {
    constructor(message, code, httpStatusCode, targets) {
        super();
        this.message = message;
        this.code = `error.${code}`;
        this.targets = targets;
        this.httpStatusCode = httpStatusCode;
    }
}
exports.default = BaseError;
//# sourceMappingURL=base.error.js.map