# Project Plan <!-- omit in toc -->
---
- [1. Background :open_book:](#1-background-open_book)
- [2. Proposed Solution :gem:](#2-proposed-solution-gem)
- [3. Implementations :wrench:](#3-implementations-wrench)
	- [3.1 Database :floppy_disk:](#31-database-floppy_disk)
		- [3.1.1 Setup](#311-setup)
	- [3.2 Backend REST API :computer:](#32-backend-rest-api-computer)
		- [3.2.1 Tech Stack :memo:](#321-tech-stack-memo)
		- [3.2.2 Setup :gear:](#322-setup-gear)
		- [3.2.3 Implementation Tasks :pushpin:](#323-implementation-tasks-pushpin)
  

## 1. Background :open_book:
The client is running a private kitchen business and is looking for a solution to optimize the food ordering experience of their customers.

## 2. Proposed Solution :gem:
We are going to build a website for the client that allows their customers to easily browse, search and submit orders.

The website will have 3 components:
- A frontend piece that serves as a storefront, customers can browse, search everything that the client offers and submit their orders directly to the client.
- A backend that handles the order submission and performs CRUD operations on the products and orders
- A database that stores all the products and orders

**Business Logic Flow**
![Business Logic Flow](/assets/business-logc-flow.png)
<br>
<br>

## 3. Implementations :wrench:
### 3.1 Database :floppy_disk:
#### 3.1.1 Setup
1. Setup local instance of MySQL database:
<a href="https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database" target="_blank">https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database</a>

2. Download and install MySQL workbench and make sure it can connect to the local DB instance you just created:
<a href="https://dev.mysql.com/doc/workbench/en/wb-installing.html" target="_blank">https://dev.mysql.com/doc/workbench/en/wb-installing.html</a>

3. Connect to your local instance using MySQL Workbench and create a schema called `little-sichuan`


### 3.2 Backend REST API :computer:
#### 3.2.1 Tech Stack :memo:
- Typescript
- A Node Express app
- TypeORM to manage DB connection and interations
- MySQL as the underlying database
- JWT for API Authorization
- Chai + Mocha for unit testing
- Postman for local development and testing

#### 3.2.2 Setup :gear:
1. Download and install Visual Studio Code, we will be using it as the main code editor:
<a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>
   - *VS Code is a very powerful open source IDE, please refer to this guid to setup some useful configs and plugins: <a href="https://dev.to/javascriptacademy/top-10-vscode-extensions-for-web-developers-19jg" target="_blank">https://dev.to/javascriptacademy/top-10-vscode-extensions-for-web-developers-19jg</a>*
  
2. Install NodeJS (16.x):
<a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a>

3. Open your your windows terminal, navigate to the `backend` folder and run the following command to install dependecies using `npm`:
	```bash
	npm run install
	```
4. After the installation is completed, locate the `.ormconfig.json` file under the `root` directory. This is the config file that TypeORM uses to connect to your database, please update the `username` and `password` field accordingly
5. After `.ormconfig.json` has all the correct values, you can now run the database migration scripts to initialize your tables. The scripts are located at `backend/src/db/migrations`. You can run them with the following command (make sure you have the database schema `little-sichuan` already created from the last section):
   ```bash
   npm run typeorm migration:run
   ```
   - Please note that currently there's only 1 migration script, it is meant to provide you with an example, you will need to update and add more migration scripts as part of this project.
   - Veirfy in MySQL Workbench that the table you just created exists
6. Now if everything is successful, you can now go ahead and start your local server by running
	```bash
	npm start
	```
	- If everything works you should see the following message in your terminal
		> Express server listening on port 3000
7. Download and install the Postman desktop app:
   <a href="https://www.postman.com/" target="_blank">https://www.postman.com/</a>
   We use Postman to test our endpoints locally, after the installation completes, make a new `GET` request and add an `Authorization` header with the following value:
   > eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o

	![Postman Example](/assets/postman.PNG)

	Hit the **Send** button and you should be able to get a `200 OK` response.

#### 3.2.3 Implementation Tasks :pushpin:

---
##### 1. Create typeorm migration scripts to initialize tables. We will need 3 tables for this project: <!-- omit in toc -->
- **Product** - stores every single product that the client offers 
	
	| Property Name | Type    | Description                               |
	|---------------|---------|-------------------------------------------|
	| id            | uuid    | primaryKey                                |
	| name          | string  | name of the product                       |
	| description   | text    | the description of the product            |
	| type          | string  | the category of the item                  |
	| image         | string  | the name of the display image of the item |
	| price         | decimal | the unit price of the product             |

- **Order Item** - stores the ordered items for each order. For example, if a customer ordered 2 * Fried Rice and 1 * Fried Chicken, then we will create 2 `Order Item` in the database for this order, 1 for the fried rice and 1 for the fried chicken.

	| Property Name | Type    | Description                                             |
	|---------------|---------|---------------------------------------------------------|
	| id            | uuid    | primaryKey                                              |
	| productId     | uuid    | the pKey of the product                                 |
	| quantity      | int     | the quantity of the ordered items                       |
	| totalPrice    | decimal | the total price of the ordered items                    |
	| orderId       | uuid    | the pKey of the order that this ordered item belongs to |
	
- **Order** - stores the order information

	| Property Name | Type      | Description                       | Constraint                                                          |
	|---------------|-----------|-----------------------------------|---------------------------------------------------------------------|
	| id            | uuid      | primaryKey                        |                                                                     |
	| orderedTime   | timestamp | the timestamp of the order        |                                                                     |
	| totalPrice    | decimal   | the total price of the order      |                                                                     |
	| taxAmount     | decimal   | the total tax amount of the order |                                                                     |
	| phoneNumber   | string    | the contact phone number          |                                                                     |
	| status        | string    | the order status                  | Can be one of these values ["ORDER_RECEIVED", "PAID", "FULLFILLED"] |

Notes:

- Please refer to the migration script located under `backend/src/db/migrations` for an example, you will need to be familiar with TypeORM <a href="https://typeorm.io/#/entities" target="_blank">Entities</a>, <a href="https://typeorm.io/#/relations" target="_blank">Relations</a>, <a href="https://typeorm.io/#/migrations" target="_blank">Migrations</a> and <a href="https://dev.mysql.com/doc/refman/8.0/en/data-types.html" target="_blank">MySQL Data Types</a>

- This is a good tutorial for buidling a REST API with TypeORM, Express and MySQL, which is exactly what we are using here, the folder structure may be different but general approach is the same - <a href="https://medium.com/@shijin_nath/typescript-rest-api-with-express-js-mysql-and-typeorm-8331cea78b0c" target="_blank">https://medium.com/@shijin_nath/typescript-rest-api-with-express-js-mysql-and-typeorm-8331cea78b0c</a> <!-- omit in toc -->
---
##### 2. Create database seed scripts to seed the initial product data <!-- omit in toc -->
You will need to create a seed script to seed some initial data into our database, the csv file is located at `backend/src/db/seeds/seed-data.csv`. The general approach here would be:
- Load the csv file and and read the data
- Parse the data to correct format
- Save into the database
Please use `backend/src/db/seeds/seeds.ts` as a starting point, you can the following npm script to test your implemenation
	```bash
	npm run seed
	```
---
##### 3. Implement an endpoint to get all products <!-- omit in toc -->
Endpoint URL: `/api/product`
Method: `GET`
Response Type: `JSON`
Response Format:
```yaml
{
	"data": [
		{
			"id": "f72cb6eb-36a0-412a-b50a-e22c26f06c2f",
			"name": "Fried Rice",
			"description": "Awesome fried rice",
			"type": "MAIN_DISH"
			"image": "https://google.com",
			"price": 13.99 
		}
	]
}
```
Notes:
- This endpoint is already created, you can use `product.routes.ts` as a starting point,  you will need to make sure the `productService` is successfully connected to the database and returning correct data

---

##### 4. Implement an endpoint to get a single product by its id <!-- omit in toc -->
Endpoint URL: `/api/product/{:id}`
Method: `GET`
Response Type: `JSON`
Response Format:
```yaml
{
	"id": "f72cb6eb-36a0-412a-b50a-e22c26f06c2f",
	"name": "Fried Rice",
	"description": "Awesome fried rice",
	"type": "MAIN_DISH"
	"image": "https://google.com",
	"price": 13.99
}
```
Notes:
- An example url looks like this - `http://localhost:3000/api/product/f72cb6eb-36a0-412a-b50a-e22c26f06c2f`

---

##### 5. Implement an endpoint to receive orders <!-- omit in toc -->
Endpoint URL: `/api/order`
Method: `POST`
Request Payload:
```yaml
{
	"phoneNumber": "111222333",
	"totalPrice": 55,
	"taxAmount": 7.5,
	"orderItems": [
		{
			"itemId": "f72cb6eb-36a0-412a-b50a-e22c26f06c2f",
			"quantity": 2,
			"totalPrice": 30
		}
	]
}
```
Response Type: `JSON`
Response Format:
```yaml
{
	"message": "Order received"
}
```

Notes:
- Once we receive the request, we need to first validate the request payload, make sure all the data are passed in and in correct format, we can use this npm package to achieve this - <a href="https://www.npmjs.com/package/jsonschema" target="_blank">https://www.npmjs.com/package/jsonschema</a>
- After validation, we need to first create an `Order` entry in the database
- Get the `orderId` from the order that was just created
- Create `orderItem` entries in the database according to the `orderItems` array from the payload, you will need to associate it with the `order` that you created from the last step using its `id`
- Make sure you associate the individual product with these `productItems`

---

##### 6. Implement an endpoint to update order status (Optional) <!-- omit in toc -->
Endpoint URL: `/api/product/{:id}`
Method: `PATCH`
Request Payload:
```yaml
{
	"id": "f72cb6eb-36a0-412a-b50a-e22c26f06c2f",
	"status": "PAID"
}
```
Response Format:
```yaml
{
	"message": "Update successful"
}
```
---

##### 7. Implement an endpoint to add a new product (Optional) <!-- omit in toc -->
Endpoint URL: `/api/product`
Method: `POST`
Request Payload:
```yaml
{
	"name": "Fried Rice",
	"description": "Awesome fried rice",
	"type": "MAIN_DISH"
	"image": "https://google.com",
	"price": 13.99 
}
```
Response Format:
```yaml
{
	"message": "New product created"
}
```
---

##### 8. Implement an endpoint to delete a product (Optional) <!-- omit in toc -->
Endpoint URL: `/api/product/{:id}`
Method: `DELETE`
Request Payload:
```yaml
{
	"id": "f72cb6eb-36a0-412a-b50a-e22c26f06c2f"
}
```
Response Format:
```yaml
{
	"message": "Product deleted"
}
```