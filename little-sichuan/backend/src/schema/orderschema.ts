export const orderSchema = {
    type: 'object',
    properties: {
        phoneNumber: { type: 'string' },
        totalPrice: { type: 'string' },
        taxAmount: { type: 'string' },
        orderItems: {
            type: 'array',
            items: {
                properties: {
                    itemId: { type: 'string' },
                    totalPrice: { type: 'string' },
                    quantity: { type: 'string' }
                },
                required: ['itemId', 'totalPrice', 'quantity']
            }
        }
    },
    required: ['totalPrice', 'taxAmount', 'phoneNumber', 'orderItems']
};
