import Token from '../../types/token.type';

/**
 * Adds a <code>token</code> and <code>trace</code> attritube to Express' request object
 */
declare global {
    namespace Express {
        interface Request {
            token: Token;
            trace: string;
        }
    }
}
