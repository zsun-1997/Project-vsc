import { Request, Response, NextFunction } from 'express';

/**
 * Adds any necessary headers, like CSP, ... etc.
 */
export default (req: Request, res: Response, next: NextFunction) => {
  // intentionally restrictive CSP policy, open this to more if need be
  res.set('Content-Security-Policy', 'script-src \'self\'');
  next();
};
