import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import session from 'express-session';
import { createConnection } from 'typeorm';
import {
    USE_CORS,
    SECURE_COOKIE,
    SAME_SITE_COOKIE,
    SESSION_SECRET
} from './config/settings.config';
import {
    jwtMiddlware,
    traceMiddleware,
    errorMiddleware,
    headerMiddleware
} from './middleware';
import { swaggerRouter, productRouter, orderRouter } from './routes';
import { NotFoundError } from './errors';

export default createConnection().then(() => {
    const app = express();

    app.use(helmet());
    if (USE_CORS) {
        app.use(cors());
    }

    app.use(
        session({
            cookie: {
                secure: SECURE_COOKIE,
                maxAge: 900000,
                httpOnly: true,
                sameSite: SAME_SITE_COOKIE
            },
            secret: SESSION_SECRET,
            store: undefined, // replace with Redis, mongo, ... etc. session store
            rolling: true,
            saveUninitialized: false, // good for complying with Cookie laws
            resave: true // set to true if store does not implement touch command
        })
    );
    app.use(bodyParser.json());
    app.use(headerMiddleware);
    app.use(express.static(path.join(__dirname, '..', '/public')));
    app.use('/api/swagger', swaggerRouter);

    app.use(traceMiddleware);
    app.use(jwtMiddlware);
    app.use('/api/product', productRouter);
    app.use('/api/order', orderRouter);

    app.use('/api/*', (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next();
        } else {
            throw new NotFoundError();
        }
    });
    app.use(errorMiddleware);
    return app;
});
