"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/**
 * Adds a Trace ID to every request, useful for debugging
 */
exports.default = (req, res, next) => {
    req.trace = uuid_1.v4();
    next();
};
//# sourceMappingURL=trace.middleware.js.map