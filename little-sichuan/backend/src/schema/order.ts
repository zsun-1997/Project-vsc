import joi from '@hapi/joi';

const totalPrice = joi.number().required();
const taxAmount = joi.number().required();
const phoneNumber = joi.string().min(9).max(9).required();
const status = joi.string().required();
const OrderItem = {
    itemId: joi.string().required(),
    quantity: joi.number().required(),
    totalPrice: joi.number().required()
};
exports.order_schema = {
    body: {
        totalPrice,
        taxAmount,
        phoneNumber,
        status
        //OrderItem
    }
};
