"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAME_SITE_COOKIE = exports.SECURE_COOKIE = exports.USE_CORS = exports.SESSION_SECRET = exports.DEBUG = exports.JWT_SECRET = exports.PORT = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const boolean_1 = require("boolean");
// pulls from .env in src directory
dotenv_1.default.config();
const { NODE_ENV } = process.env;
exports.NODE_ENV = NODE_ENV;
// pulls in env-specific variables, like CORS
dotenv_1.default.config({ path: `./env/.env.${NODE_ENV === null || NODE_ENV === void 0 ? void 0 : NODE_ENV.toLowerCase()}` });
const { PORT, JWT_SECRET, DEBUG, USE_CORS, SECURE_COOKIE, SAME_SITE_COOKIE, SESSION_SECRET } = process.env;
exports.JWT_SECRET = JWT_SECRET;
exports.DEBUG = DEBUG;
exports.SESSION_SECRET = SESSION_SECRET;
// all values exported should be in the correct type, i.e. not all strings
const port = PORT ? Number(PORT) : 3000;
exports.PORT = port;
const cors = boolean_1.boolean(USE_CORS);
exports.USE_CORS = cors;
const secure = boolean_1.boolean(SECURE_COOKIE);
exports.SECURE_COOKIE = secure;
const sameSite = SAME_SITE_COOKIE; // must be one of these
exports.SAME_SITE_COOKIE = sameSite;
//# sourceMappingURL=settings.config.js.map