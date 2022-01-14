"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const settings_config_1 = require("./settings.config");
/**
 * Enabled dynamically, avoids complicated cross-platforms issues
 */
if (settings_config_1.DEBUG)
    debug_1.default.enable(settings_config_1.DEBUG);
/**
 * Exports a 'debug' logger, configured to log to the 'app' namespace
 * Also provides a global method for all logging, for opportunities to push logs elsewhere
 */
exports.default = debug_1.default(settings_config_1.DEBUG);
//# sourceMappingURL=logger.config.js.map