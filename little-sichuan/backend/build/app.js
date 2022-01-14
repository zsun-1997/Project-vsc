"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const typeorm_1 = require("typeorm");
const settings_config_1 = require("./config/settings.config");
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const errors_1 = require("./errors");
exports.default = typeorm_1.createConnection().then(() => {
    const app = express_1.default();
    app.use(helmet_1.default());
    if (settings_config_1.USE_CORS) {
        app.use(cors_1.default());
    }
    app.use(express_session_1.default({
        cookie: {
            secure: settings_config_1.SECURE_COOKIE,
            maxAge: 900000,
            httpOnly: true,
            sameSite: settings_config_1.SAME_SITE_COOKIE
        },
        secret: settings_config_1.SESSION_SECRET,
        store: undefined,
        rolling: true,
        saveUninitialized: false,
        resave: true // set to true if store does not implement touch command
    }));
    app.use(body_parser_1.default.json());
    app.use(middleware_1.headerMiddleware);
    app.use(express_1.default.static(path_1.default.join(__dirname, '..', '/public')));
    app.use('/api/swagger', routes_1.swaggerRouter);
    app.use(middleware_1.traceMiddleware);
    app.use(middleware_1.jwtMiddlware);
    app.use('/api/product', routes_1.productRouter);
    app.use('/api/*', (req, res, next) => {
        if (req.method === 'OPTIONS') {
            // permit CORS pre-flight requests to pass through
            next();
        }
        else {
            throw new errors_1.NotFoundError();
        }
    });
    app.use(middleware_1.errorMiddleware);
    return app;
});
//# sourceMappingURL=app.js.map