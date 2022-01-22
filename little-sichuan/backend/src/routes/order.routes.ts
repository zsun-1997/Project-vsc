import { Router } from 'express';
import ash from 'express-async-handler';
import OrderService from '../services/order.service';
// import expressJoi from '@escook/express-joi';
const orderRouter = Router();
//const { order_schema } = require('../schema/order');
// const ValidateSch = require('../middleware/validate-schema');
// const schema = require('../schema/order');
orderRouter.post(
    '/',
    // expressJoi(order_schema),
    // ValidateSch(schema),
    ash(async (req, res) => {
        // const orderInfo = req.body;
        let {
            phoneNumber,
            totalPrice,
            taxAmount,
            productId,
            quantity,
            item_totalPrice
        } = req.body;
        res.send(
            await OrderService.PostOrders(
                phoneNumber,
                totalPrice,
                taxAmount,
                productId,
                quantity,
                item_totalPrice
            )
        );
    })
);

orderRouter.patch(
    '/:id',
    ash(async (req, res) => {
        const id = req.params.id;
        const status: string = req.body;
        res.send(await OrderService.UpdateStatus(id, status));
    })
);
export default orderRouter;
// function newFunction(): { order_schema: any } {
//     return require('../schema/order');
// }
