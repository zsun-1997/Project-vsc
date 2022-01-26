export var productSchema = {
    required: ['id', 'name', 'description', 'type', 'image', 'price'],
    properties: {
        id: {
            $id: '#/properties/id',
            type: 'string',
            title: 'The id schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['f72cb6eb-36a0-412a-b50a-e22c26f06c2f']
        },
        name: {
            $id: '#/properties/name',
            type: 'string',
            title: 'The name schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['Fried Rice']
        },
        description: {
            $id: '#/properties/description',
            type: 'string',
            title: 'The description schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['Awesome fried rice']
        },
        type: {
            $id: '#/properties/type',
            type: 'string',
            title: 'The type schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['MAIN_DISH']
        },
        image: {
            $id: '#/properties/image',
            type: 'string',
            title: 'The image schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['https://google.com']
        },
        price: {
            $id: '#/properties/price',
            type: 'number',
            title: 'The price schema',
            description: 'An explanation about the purpose of this instance.',
            default: 0.0,
            examples: [13.99]
        }
    },
    additionalProperties: true
};
