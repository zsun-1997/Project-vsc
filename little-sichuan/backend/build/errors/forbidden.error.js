"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/**
 * Forbidden Error, when the user is not allowed to perform some action
 * Maps to a 403 HTTP code
 */
class ForbiddenError extends _1.BaseError {
    /**
       * Constructs a new ForbiddenError
       * @param message describing what went wrong
       * @param code to be appended to 'error.forbidden.'
       */
    constructor(message, code) {
        super(message, `forbidden.${code}`, 403);
    }
}
exports.default = ForbiddenError;
//# sourceMappingURL=forbidden.error.js.map