"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerRouter = express_1.Router();
/**
 * @swagger
 * /api/swagger:
 *  get:
 *      summary: GET /api/swagger
 *      description: Fetches Swagger spec as JSON
 *      responses:
 *          200:
 *              description: The Swagger Spec
 *              schema:
 *                  type: object
 */
swaggerRouter.get('/', express_async_handler_1.default(async (req, res) => {
    const swaggerDefinition = {
        info: {
            title: 'Express Scaffolding Project API',
            version: '1.0.0',
            description: 'Sample Project using Express and Typescript',
        },
        host: 'localhost:3000',
        basePath: '/',
    };
    const options = {
        swaggerDefinition,
        apis: ['./src/routes/*.ts', './src/models/**/*.ts'],
    };
    res.send(swagger_jsdoc_1.default(options));
}));
exports.default = swaggerRouter;
//# sourceMappingURL=swagger.routes.js.map