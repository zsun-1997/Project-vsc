"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Product_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const orderItem_model_1 = __importDefault(require("./orderItem.model"));
/**
 * @swagger
 *  definitions:
 *      Product:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              name:
 *                  type: string
 */
let Product = Product_1 = class Product {
    static createProduct(name) {
        const product = new Product_1();
        product.name = name;
        return product;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", String)
], Product.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('BLOB'),
    __metadata("design:type", Blob)
], Product.prototype, "image", void 0);
__decorate([
    typeorm_1.Column('decimal'),
    __metadata("design:type", typeorm_1.Double)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.OneToOne(() => orderItem_model_1.default, orderItem => orderItem.product),
    __metadata("design:type", orderItem_model_1.default)
], Product.prototype, "orderItem", void 0);
Product = Product_1 = __decorate([
    typeorm_1.Entity()
], Product);
exports.default = Product;
//# sourceMappingURL=product.model.js.map