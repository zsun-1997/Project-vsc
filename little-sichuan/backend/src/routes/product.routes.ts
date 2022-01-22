import { Router } from 'express';
import ash from 'express-async-handler';
import ProductService from '../services/product.service';

const productRouter = Router();

/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: GET /api/product
 *      description: Fetches all products
 *      responses:
 *          200:
 *              description: Returns all products
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/Product"
 */
productRouter.get(
    '/',
    ash(async (req, res) => {
        res.send(await ProductService.fetchProducts());
    })
);

productRouter.get(
    '/:id',
    ash(async (req, res) => {
        const id = req.params.id;
        console.log(id);
        res.send(await ProductService.fetchbyIdProducts(id));
    })
);

productRouter.post(
    '/',
    ash(async (req, res) => {
        //const newProduct = req.body;
        let { name, description, type, image, price } = req.body;
        res.send(
            await ProductService.addNewProduct(
                name,
                description,
                type,
                image,
                price
            )
        );
    })
);

productRouter.delete(
    '/:id',
    ash(async (req, res) => {
        const delId = req.params.id;
        res.send(await ProductService.delProduct(delId));
    })
);

export default productRouter;
