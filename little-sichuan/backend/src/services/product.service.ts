import { getRepository } from 'typeorm';
import { Product } from '../models';

export default class ProductService {
    static async fetchbyIdProducts(id: string) {
        return getRepository(Product).findOne(id);
    }

    /**
     * Fetches all products
     * @returns all products
     */
    static async fetchProducts() {
        return getRepository(Product).find();
    }
}
