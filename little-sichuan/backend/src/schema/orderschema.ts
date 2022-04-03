const orderSchema = {
    type: 'object',
    properties: {
        phoneNumber: { type: 'string' },
        totalPrice: { type: 'number' },
        taxAmount: { type: 'number' },
        orderItems: {
            type: 'array',
            items: {
                properties: {
                    itemId: { type: 'string' },
                    totalPrice: { type: 'number' },
                    quantity: { type: 'number' }
                },
                required: ['itemId', 'totalPrice', 'quantity']
            }
        }
    },
    required: ['totalPrice', 'taxAmount', 'phoneNumber', 'orderItems']
};
export default orderSchema;
