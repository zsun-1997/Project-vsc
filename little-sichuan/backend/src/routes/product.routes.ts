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

export default productRouter;
