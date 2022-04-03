import { getRepository, createConnection } from 'typeorm';
import { Product } from '../../models';
import csv from 'csvtojson';

createConnection()
    .then(async () => {
        console.log('seed start');
        const productList: Array<Product> = [];
        await csv()
            .fromFile(`${__dirname}/seed-data.csv`)
            .then((jsonObj) => {
                jsonObj.forEach((item) => {
                    productList.push(
                        Product.createProduct(
                            item['item_name'],
                            item['item_desc'],
                            item['type'],
                            item['image'],
                            item['price'],
                            item['isfeatured']
                        )
                    );
                });
                console.log(productList);
            });
        await getRepository(Product).save(productList);
    })
    .then(() => {
        console.log('Seed comlete');
        process.exit(0);
    })
    .catch((err) => {
        console.log('Seed error');
        console.log(err);
        process.exit(1);
    });
