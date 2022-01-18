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
    totalPrice: Double;

    @Column('decimal')
    taxAmount: Double;

    @Column('varchar')
    phoneNumber: string;

    @Column('text')
    status: string;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItem: OrderItem[];
    // static createProduct(name: string) {
    //     const product = new Product();
    //     product.name = name;
    //     return product;
    // }
}
