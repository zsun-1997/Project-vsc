"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../../models");
const logger_config_1 = __importDefault(require("../../config/logger.config"));
exports.default = typeorm_1.createConnection()
    .then(() => typeorm_1.getRepository(models_1.Product).save(models_1.Product.createProduct('Fried Rice')))
    .then(() => {
    logger_config_1.default('seed complete');
})
    .catch((err) => {
    logger_config_1.default('seed error');
    logger_config_1.default(err);
});
//# sourceMappingURL=seeds.js.map