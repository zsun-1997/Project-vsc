import { Router } from 'express';
import ash from 'express-async-handler';
import OrderService from '../services/order.service';

const orderRouter = Router();
orderRouter.post(
    '/',
    ash(async (req, res) => {
        const { phoneNumber, totalPrice, taxAmount, orderItems } = req.body;
        res.send(
            await OrderService.PostOrders(
                phoneNumber,
                totalPrice,
                taxAmount,
                orderItems
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
