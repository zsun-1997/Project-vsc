import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
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
@Entity('OrderItem')
export default class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    quantity: number;

    @Column('decimal')
    ItemtotalPrice: number;

    @ManyToOne(() => Product, (product) => product.orderItem)
    @JoinColumn()
    product: Product;

    @ManyToOne(() => Order, (order) => order.orderItem)
    @JoinColumn()
    order: Order;

    static createOrderItem(quantity: number, ItemtotalPrice: number) {
        const orderItem = new OrderItem();
        orderItem.quantity = quantity;
        orderItem.ItemtotalPrice = ItemtotalPrice;
        return orderItem;
    }
}
