import { OutgoingMessage } from 'http';
import { Double, getRepository } from 'typeorm';
import { Product } from '../models';
import { productRouter } from '../routes';

export default class ProductService {
    static async addNewProduct(
        name: string,
        description: string,
        type: string,
        image: string,
        price: Double
    ): Promise<any> {
        let product = Product;
        const productList: Array<Product> = [];
        productList.push(
            product.createProduct(name, description, type, image, price)
        );
        const productRepository = getRepository(Product);
        try {
            await productRepository.save(productList);
        } catch (error) {
            return 'error';
        }
        return 'New product created';
    }
    static async delProduct(delId: string): Promise<any> {
        const productRepository = getRepository(Product);
        let product: Product;
        try {
            product = await productRepository.findOneOrFail(delId);
        } catch (error) {
            return 'product not found';
        }
        productRepository.delete(delId);
        return 'Product deleted';
    }
    // static addNewProduct(newProduct: any): any {
    //     getRepository(Product).save(newProduct);
    //     return 'New product created';
    // }
    static async fetchbyIdProducts(id) {
        const productRepository = getRepository(Product);
        try {
            return await productRepository.findOne(id);
        } catch (error) {
            return 'error';
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
