import { getRepository, createConnection } from 'typeorm';
import { Product } from '../../models';
import logger from '../../config/logger.config';

export default createConnection()
    .then(() => getRepository(Product).save(Product.createProduct('Fried Rice')))
    .then(() => {
        logger('seed complete');
    })
    .catch((err) => {
        logger('seed error');
        logger(err);
    });
