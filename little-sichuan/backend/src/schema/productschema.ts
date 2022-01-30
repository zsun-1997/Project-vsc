export const productSchema = {
    type: 'Product',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        type: { type: 'string' },
        image: { type: 'string' },
        price: { type: 'number' }
    },
    required: ['name', 'description', 'type', 'image', 'price']
};
