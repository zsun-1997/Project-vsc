import { Router } from 'express';
import ash from 'express-async-handler';
import ProductService from '../services/product.service';
//import Validator = require('jsonschema').Validator;
import { Validator } from 'jsonschema';
import schema = require('../schema/productschema');
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
        const { name, description, type, image, price } = req.body;
        const myValidator = new Validator();
        const validation = myValidator.validate(schema, req.body);
        if (validation.valid) {
            res.send(
                await ProductService.addNewProduct(
                    name,
                    description,
                    type,
                    image,
                    price
                )
            );
        } else {
            res.send(new Error('Format error'));
        }
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
