import { OutgoingMessage } from 'http';
import { Double, getRepository, Repository } from 'typeorm';
import { Order, OrderItem } from '../models';

export default class OrderService {
    static async PostOrders(
        phoneNumber: string,
        totalPrice: number,
        taxAmount: number,
        productId: string,
        quantity: number,
        item_totalPrice: number
    ) {
        const order = new Order();
        const status = 'UNPAID';
        order.phoneNumber = phoneNumber;
        order.totalPrice = totalPrice;
        order.taxAmount = taxAmount;
        order.status = status;
        const orderItem = new OrderItem();
        const orderId = 'unknow';
        orderItem.productId = productId;
        orderItem.quantity = quantity;
        orderItem.totalPrice = item_totalPrice;
        orderItem.orderId = orderId;
        orderItem.order = order;
        console.log(orderId);
        const orderRepository = getRepository(Order);
        // const orderId = order.id;
        // orderItem.orderId = orderId;
        const orderItemRepository = getRepository(OrderItem);
        //await orderRepository.save(order);
        await orderItemRepository.save(orderItem);
        try {
            //console.log(productId);
            await orderRepository.save(order);
            //await orderItemRepository.save(orderItem);
        } catch (error) {
            return 'error';
        }
        return 'Order received';
    }
    static async UpdateStatus(id: string, status: string) {
        const orderRepository = getRepository(Order);
        let order = new Order();
        try {
            order = await orderRepository.findOneOrFail(id);
        } catch (error) {
            return 'order not found';
        }

        order.status = status;
        try {
            await orderRepository.save(order);
        } catch (error) {
            return 'error';
        }
        return 'Update successful';
    }
    // static UpdateStatus(updatSta: any): any {
    //     getRepository(Order).update(updatSta.id, updatSta.status);
    //     return 'Update successful';
    // }
    // static PostOrders(orderInfo: any): any {
    //     getRepository(Order).save(orderInfo);
    //     //getRepository(OrderItem).save(orderInfo.OrderItem);
    //     return 'Order received';
    // }
}
