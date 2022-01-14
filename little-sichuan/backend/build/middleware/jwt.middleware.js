"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_helper_1 = __importDefault(require("../helpers/jwt.helper"));
const errors_1 = require("../errors");
/**
 * Pulls the Authorization header from the Express Response object
 * and decodes it into a Token object, which is attached to the
 * Response object. Throws an Unauthorized error if no token is
 * provided or it is invalid.
 */
exports.default = (req, res, next) => {
    const auth = req.header('Authorization');
    if (!auth) {
        throw new errors_1.UnauthorizedError('Authorization Header not provided');
    }
    req.token = jwt_helper_1.default.verify(auth);
    next();
};
//# sourceMappingURL=jwt.middleware.js.map