import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    Double,
    OneToOne,
    JoinColumn,
    Timestamp,
    OneToMany
} from 'typeorm';
import { Product } from '.';
import orderRoutes from '../routes/order.routes';
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
@Entity()
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
        status: string
    ) {
        const order = new Order();
        order.totalPrice = totalPrice;
        order.taxAmount = taxAmount;
        order.phoneNumber = phoneNumber;
        order.status = status;
    }
}
