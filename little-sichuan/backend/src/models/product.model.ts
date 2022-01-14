import { PrimaryGeneratedColumn, Entity, Column, Double, OneToOne } from 'typeorm';
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
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('char')
    name: string;

    @Column('text')
    description: string;

    @Column('char')
    type: string;

    @Column('BLOB')
    image: Blob;

    @Column('decimal')
    price: Double;

    @OneToOne(()=>OrderItem, orderItem => orderItem.product)
    orderItem: OrderItem;


     static createProduct(name: string) {
        const product = new Product();
         product.name = name;
         return product;
     }
}
