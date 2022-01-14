"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const settings_config_1 = require("./config/settings.config");
const logger_config_1 = __importDefault(require("./config/logger.config"));
app_1.default.then((express) => {
    express.listen(settings_config_1.PORT, () => {
        logger_config_1.default(`Express server listening on port ${settings_config_1.PORT}`);
    });
});
//# sourceMappingURL=server.js.map