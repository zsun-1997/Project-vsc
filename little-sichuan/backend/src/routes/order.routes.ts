import { Router } from 'express';
import ash from 'express-async-handler';
import OrderService from '../services/order.service';
import expressJoi from '@escook/express-joi';
const orderRoutes = Router();
const { order_schema } = require('../schema/order');
orderRoutes.post(
    '/',
    //expressJoi(order_schema),
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

orderRoutes.patch(
    '/:id',
    ash(async (req, res) => {
        const id = req.params.id;
        const status = req.body;
        res.send(await OrderService.UpdateStatus(id, status));
    })
);
export default orderRoutes;
// function newFunction(): { order_schema: any } {
//     return require('../schema/order');
// }
