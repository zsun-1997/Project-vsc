"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/**
 * Unauthorized Error, when a request contains no auth header or an invalid auth header
 * Maps to a 401 HTTP code
 */
class UnauthorizedError extends _1.BaseError {
    constructor(message) {
        super(message, 'unauthorized', 401);
    }
}
exports.default = UnauthorizedError;
//# sourceMappingURL=unauthorized.error.js.map