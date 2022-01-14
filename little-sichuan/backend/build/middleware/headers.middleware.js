"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds any necessary headers, like CSP, ... etc.
 */
exports.default = (req, res, next) => {
    // intentionally restrictive CSP policy, open this to more if need be
    res.set('Content-Security-Policy', 'script-src \'self\'');
    next();
};
//# sourceMappingURL=headers.middleware.js.map