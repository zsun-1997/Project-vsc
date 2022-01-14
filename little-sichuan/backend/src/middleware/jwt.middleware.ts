import { Request, Response, NextFunction } from 'express';
import jwtHelper from '../helpers/jwt.helper';
import { UnauthorizedError } from '../errors';

/**
 * Pulls the Authorization header from the Express Response object
 * and decodes it into a Token object, which is attached to the
 * Response object. Throws an Unauthorized error if no token is
 * provided or it is invalid.
 */
export default (req: Request, res: Response, next: NextFunction) => {
  const auth = req.header('Authorization');

  if (!auth) {
    throw new UnauthorizedError('Authorization Header not provided');
  }

  req.token = jwtHelper.verify(auth as string);
  next();
};
