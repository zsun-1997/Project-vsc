export class OrderItemRequest {
    itemId: string;
    totalPrice: number;
    quantity: number;

    constructor(itemId: string, totalPrice: number, quantity: number) {
        this.itemId = itemId;
        this.totalPrice = totalPrice;
        this.quantity = quantity;
    }
}
