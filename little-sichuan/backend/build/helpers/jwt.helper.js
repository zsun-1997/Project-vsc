"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const settings_config_1 = require("../config/settings.config");
const errors_1 = require("../errors");
/**
 * Signs the payload with the <code>JWT_SECRET</code> property set in the env file
 * Assumes symmetric key, although this can changed to use a <code>JWT_PUB_SECRET</code>
 * @param payload to be signed
 * @returns {string} of the JWT
 */
const sign = (payload) => jsonwebtoken_1.default.sign(payload, settings_config_1.JWT_SECRET);
/**
 * Verifies and decodes the JWT provided using the <code>JWT_SECRET</code> property set in the env file
 * @param token to be verified
 */
const verify = (token) => {
    console.log(token);
    try {
        return jsonwebtoken_1.default.verify(token, settings_config_1.JWT_SECRET);
    }
    catch (err) {
        console.log(err);
        // intentionally hide error, consider logging this somewhere safe
        throw new errors_1.UnauthorizedError('Invalid JWT Token');
    }
};
exports.default = { sign, verify };
//# sourceMappingURL=jwt.helper.js.map