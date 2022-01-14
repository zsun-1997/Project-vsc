import dotenv from 'dotenv';
import { boolean } from 'boolean';

// pulls from .env in src directory
dotenv.config();

const { NODE_ENV } = process.env as {
    [key: string]: string;
};

// pulls in env-specific variables, like CORS
dotenv.config({ path: `./env/.env.${NODE_ENV?.toLowerCase()}` });

const {
    PORT,
    JWT_SECRET,
    DEBUG,
    USE_CORS,
    SECURE_COOKIE,
    SAME_SITE_COOKIE,
    SESSION_SECRET
} = process.env as {
    [key: string]: string;
};

// all values exported should be in the correct type, i.e. not all strings
const port = PORT ? Number(PORT) : 3000;
const cors = boolean(USE_CORS);
const secure = boolean(SECURE_COOKIE);
const sameSite = SAME_SITE_COOKIE as boolean | 'strict' | 'none' | 'lax'; // must be one of these
export {
    NODE_ENV,
    port as PORT,
    JWT_SECRET,
    DEBUG,
    SESSION_SECRET,
    cors as USE_CORS,
    secure as SECURE_COOKIE,
    sameSite as SAME_SITE_COOKIE
};
