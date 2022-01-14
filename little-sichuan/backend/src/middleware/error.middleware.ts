import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../errors';
import logger from '../config/logger.config';

/**
 * If an error is thrown, this will catch and is intended to be the only error handler.
 * If the error is a custom error type, it will be transformed to a human/machine
 * readable error and use the appropriate status code.
 *
 * If it isn't a custom error, a 500 will be raised with the request trace ID,
 * while logging the real error and trace ID for future debugging.
 */
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError) {
    return res.status((err as BaseError).httpStatusCode).send({ ...err });
  }

  logger({
    err,
    id: req.trace,
  });
  res.status(500).send({ message: `Internal Server Error, see an administrator with this ID: ${req.trace}`, code: 'internal-server-error' });
};
