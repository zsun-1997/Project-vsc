import { getRepository } from 'typeorm';
import { Product } from '../models';

export default class ProductService {
    /**
     * Fetches all products
     * @returns all products
     */
    static async fetchProducts() {
        return getRepository(Product).find();
    }
}
