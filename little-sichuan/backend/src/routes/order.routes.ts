import { Router } from 'express';
import ash from 'express-async-handler';
import OrderService from '../services/order.service';

const orderRoutes = Router();

orderRoutes.post(
    '/',
    ash(async (req, res) => {
        const orderInfo = req.body;
        console.log(orderInfo);
        res.send(await OrderService.PostOrders(orderInfo));
    })
);

export default orderRoutes;
