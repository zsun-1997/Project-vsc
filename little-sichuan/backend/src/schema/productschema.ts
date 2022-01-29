export const productSchema = {
    type: 'object',
    properties: {
        totalPrice: { type: 'string' },
        taxAmount: { type: 'string' },
        phoneNumber: { type: 'string' },
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
