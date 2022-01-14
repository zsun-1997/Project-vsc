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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _1 = require(".");
const order_model_1 = __importDefault(require("./order.model"));
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
let OrderItem = class OrderItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", Number)
], OrderItem.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column('decimal'),
    __metadata("design:type", typeorm_1.Double)
], OrderItem.prototype, "totalPrice", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", Number)
], OrderItem.prototype, "image", void 0);
__decorate([
    typeorm_1.OneToOne(() => _1.Product, product => product.orderItem),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.Product)
], OrderItem.prototype, "product", void 0);
__decorate([
    typeorm_1.ManyToOne(() => order_model_1.default, order => order.orderItem),
    __metadata("design:type", order_model_1.default)
], OrderItem.prototype, "order", void 0);
OrderItem = __decorate([
    typeorm_1.Entity()
], OrderItem);
exports.default = OrderItem;
//# sourceMappingURL=orderItem.model.js.map