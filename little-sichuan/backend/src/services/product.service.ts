import { getRepository } from 'typeorm';
import { Product } from '../models';

export default class ProductService {
    static delProduct(delId: any): any {
        getRepository(Product).remove(delId);
        return 'Product deleted';
    }
    static addNewProduct(newProduct: any): any {
        getRepository(Product).save(newProduct);
        return 'New product created';
    }
    static UpdateStatus(updatSta: any): any {
        return 'Update successful';
    }
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
