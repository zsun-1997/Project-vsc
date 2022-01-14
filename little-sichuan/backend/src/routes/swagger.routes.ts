import { Router } from 'express';
import ash from 'express-async-handler';
import swagger from 'swagger-jsdoc';

const swaggerRouter = Router();

/**
 * @swagger
 * /api/swagger:
 *  get:
 *      summary: GET /api/swagger
 *      description: Fetches Swagger spec as JSON
 *      responses:
 *          200:
 *              description: The Swagger Spec
 *              schema:
 *                  type: object
 */
swaggerRouter.get('/', ash(async (req, res) => {
  const swaggerDefinition = {
    info: {
      title: 'Express Scaffolding Project API',
      version: '1.0.0',
      description: 'Sample Project using Express and Typescript',
    },
    host: 'localhost:3000',
    basePath: '/',
  };

  const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/models/**/*.ts'],
  };

  res.send(swagger(options));
}));

export default swaggerRouter;
