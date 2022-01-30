import { getRepository } from 'typeorm';
import { Order, OrderItem, Product } from '../models';
import { OrderStatus } from '../enums/OrderStatus.enum';
import { OrderItemRequest } from '../regularmodule/OrderItemRequest';
import { HttpResponseModel } from '../regularmodule/HttpResponse.model';

export default class OrderService {
    static async PostOrders(
        phoneNumber: string,
        totalPrice: number,
        taxAmount: number,
        orderItems: OrderItemRequest[]
    ) {
        try {
            const orderRepository = getRepository(Order);
            const order = Order.createOrder(
                totalPrice,
                taxAmount,
                phoneNumber,
                OrderStatus.ORDER_RECEIVED
            );
            await orderRepository.save(order);

            orderItems.forEach(async (item) => {
                const relatedProduct = getRepository(Product).findOne(
                    item.itemId
                );
                console.log(relatedProduct);
                const newOrderItem = OrderItem.createOrderItem(
                    item.quantity,
                    item.totalPrice
                );
                newOrderItem.product = relatedProduct;
                newOrderItem.order = order;
            });
        } catch (error) {
            throw new Error('error');
        }
    }
    static async UpdateStatus(id: string, status: OrderStatus) {
        try {
            const orderRepository = getRepository(Order);
            const order = await orderRepository.findOneOrFail(id);
            if (order) {
                order.status = status;
                await orderRepository.save(order);
            }
        } catch (error) {
            throw new Error('No such id');
        }
        return new HttpResponseModel(200, 'Update successful');
    }
}
