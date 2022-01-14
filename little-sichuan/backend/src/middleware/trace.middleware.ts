import { Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';

/**
 * Adds a Trace ID to every request, useful for debugging
 */
export default (req: Request, res: Response, next: NextFunction) => {
  req.trace = uuidV4();
  next();
};
