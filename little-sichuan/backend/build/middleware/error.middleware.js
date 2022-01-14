"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const logger_config_1 = __importDefault(require("../config/logger.config"));
/**
 * If an error is thrown, this will catch and is intended to be the only error handler.
 * If the error is a custom error type, it will be transformed to a human/machine
 * readable error and use the appropriate status code.
 *
 * If it isn't a custom error, a 500 will be raised with the request trace ID,
 * while logging the real error and trace ID for future debugging.
 */
exports.default = (err, req, res, next) => {
    if (err instanceof errors_1.BaseError) {
        return res.status(err.httpStatusCode).send({ ...err });
    }
    logger_config_1.default({
        err,
        id: req.trace,
    });
    res.status(500).send({ message: `Internal Server Error, see an administrator with this ID: ${req.trace}`, code: 'internal-server-error' });
};
//# sourceMappingURL=error.middleware.js.map