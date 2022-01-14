import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/settings.config';
import Token from '../types/token.type';
import { UnauthorizedError } from '../errors';

/**
 * Signs the payload with the <code>JWT_SECRET</code> property set in the env file
 * Assumes symmetric key, although this can changed to use a <code>JWT_PUB_SECRET</code>
 * @param payload to be signed
 * @returns {string} of the JWT
 */
const sign = (payload: string | object | Buffer) =>
    jwt.sign(payload, JWT_SECRET);

/**
 * Verifies and decodes the JWT provided using the <code>JWT_SECRET</code> property set in the env file
 * @param token to be verified
 */
const verify = (token: string) => {
    console.log(token);
    try {
        return jwt.verify(token, JWT_SECRET) as Token;
    } catch (err) {
        console.log(err);
        // intentionally hide error, consider logging this somewhere safe
        throw new UnauthorizedError('Invalid JWT Token');
    }
};

export default { sign, verify };
