import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    Double,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import { Product } from '.';
import Order from './order.model';

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
@Entity()
export default class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    productId: string;

    @Column('int')
    quantity: number;

    @Column('decimal')
    totalPrice: Double;

    @Column('uuid')
    orderId: string;

    @OneToOne(() => Product, (product) => product.orderItem)
    @JoinColumn()
    product: Product;

    @ManyToOne(() => Order, (order) => order.orderItem)
    order: Order;

    static createOrderItem(
        productId: string,
        quantity: number,
        totalPrice: Double,
        orderId: string
    ) {
        const orderItem = new OrderItem();
        orderItem.productId = productId;
        orderItem.quantity = quantity;
        orderItem.totalPrice = totalPrice;
        orderItem.orderId = orderId;
    }
}
