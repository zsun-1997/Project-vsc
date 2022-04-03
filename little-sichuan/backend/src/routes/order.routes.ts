import { Router } from 'express';
import ash from 'express-async-handler';
import { OrderStatus } from '../enums/OrderStatus.enum';
import OrderService from '../services/order.service';
import { Validator } from 'jsonschema';
import schema from '../schema/orderschema';

const orderRouter = Router();
orderRouter.post(
    '/',
    ash(async (req, res) => {
        const { phoneNumber, totalPrice, taxAmount, orderItems } = req.body;

        const myValidator = new Validator();
        const validation = myValidator.validate(req.body, schema);
        console.log(validation.valid);
        if (validation.valid) {
            res.send(
                await OrderService.PostOrders(
                    phoneNumber,
                    totalPrice,
                    taxAmount,
                    orderItems
                )
            );
        } else {
            res.send(new Error('Format error'));
        }
    })
);

orderRouter.patch(
    '/:id',
    ash(async (req, res) => {
        const id = req.params.id;
        const status: OrderStatus = req.body;
        res.send(await OrderService.UpdateStatus(id, status));
    })
);
export default orderRouter;
