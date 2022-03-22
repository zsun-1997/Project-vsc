import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    Timestamp,
    OneToMany
} from 'typeorm';
import { OrderStatus } from '../enums/OrderStatus.enum';
import OrderItem from './orderItem.model';

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
@Entity('Order')
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('timestamp')
    odderedTime: Timestamp;

    @Column('decimal')
    totalPrice: number;

    @Column('decimal')
    taxAmount: number;

    @Column('varchar')
    phoneNumber: string;

    @Column('text')
    status: string;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItem: OrderItem[];
    static createOrder(
        totalPrice: number,
        taxAmount: number,
        phoneNumber: string,
        status: OrderStatus
    ) {
        const order = new Order();
        order.totalPrice = totalPrice;
        order.taxAmount = taxAmount;
        order.phoneNumber = phoneNumber;
        order.status = status;
        return order;
    }
}
