export const productSchema = {
    type: 'Product',
    properties: {
        // totalPrice: { type: 'string' },
        // taxAmount: { type: 'string' },
        // phoneNumber: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        type: { type: 'string' },
        image: { type: 'string' },
        price: { type: 'number' }

        // orderItems: {
        //     type: 'array',
        //     items: {
        //         properties: {
        //             itemId: { type: 'string' },
        //             totalPrice: { type: 'string' },
        //             quantity: { type: 'string' }
        //         },
        //         required: ['itemId', 'totalPrice', 'quantity']
        //     }
        // }
    },
    required: ['name', 'description', 'type', 'image', 'price']
};
