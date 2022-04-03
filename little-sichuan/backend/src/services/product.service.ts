import { getRepository } from 'typeorm';
import { Product } from '../models';
import { HttpResponseModel } from '../regularmodule/HttpResponse.model';
import { ProductIsFeatured } from '../enums/ProductIsFeatured.enum';

export default class ProductService {
    static async addNewProduct(
        name: string,
        description: string,
        type: string,
        image: string,
        price: number
    ): Promise<HttpResponseModel> {
        try {
            await getRepository(Product).save(
                Product.createProduct(
                    name,
                    description,
                    type,
                    image,
                    price,
                    ProductIsFeatured.false
                )
            );
        } catch (error) {
            throw new Error('Failed to create');
        }
        return new HttpResponseModel(200, 'New product created');
    }
    static async delProduct(delId: string): Promise<HttpResponseModel> {
        try {
            await getRepository(Product).findOneOrFail(delId);
        } catch (error) {
            throw new Error('Not found');
        }
        getRepository(Product).delete(delId);
        return new HttpResponseModel(200, 'Product deleted');
    }
    static async fetchbyIdProducts(id) {
        try {
            return await getRepository(Product).findOne(id);
        } catch (error) {
            throw new Error('Not found');
        }
    }
    /**
     * Fetches all products
     * @returns all products
     */
    static async fetchProducts() {
        return getRepository(Product).find();
    }
}
