"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const product_service_1 = __importDefault(require("../services/product.service"));
const productRouter = express_1.Router();
/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: GET /api/product
 *      description: Fetches all products
 *      responses:
 *          200:
 *              description: Returns all products
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/Product"
 */
productRouter.get('/', express_async_handler_1.default(async (req, res) => {
    res.send(await product_service_1.default.fetchProducts());
}));
exports.default = productRouter;
//# sourceMappingURL=product.routes.js.map