import { getRepository, Repository } from 'typeorm';
import { Order } from '../models';

export default class OrderService {
    static PostOrders(orderInfo: any): any {
        getRepository(Order).save(orderInfo);
        return 'Order received';
    }
}
