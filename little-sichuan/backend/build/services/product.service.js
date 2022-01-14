"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
class ProductService {
    /**
     * Fetches all products
     * @returns all products
     */
    static async fetchProducts() {
        return typeorm_1.getRepository(models_1.Product).find();
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map