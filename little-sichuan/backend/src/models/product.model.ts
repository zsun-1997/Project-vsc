import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    Double,
    OneToOne
} from 'typeorm';
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
    id: string;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('varchar')
    type: string;

    @Column('varchar')
    image: string;

    @Column('decimal')
    price: Double;

    @OneToOne(() => OrderItem, (orderItem) => orderItem.product)
    orderItem: OrderItem;

    static createProduct(
        name: string,
        description: string,
        type: string,
        image: string,
        price: Double
    ) {
        const product = new Product();
        product.name = name;
        product.description = description;
        product.type = type;
        product.image = image;
        product.price = price;
        return product;
    }
}
