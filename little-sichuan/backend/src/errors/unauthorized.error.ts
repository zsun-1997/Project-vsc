import { BaseError } from '.';

/**
 * Unauthorized Error, when a request contains no auth header or an invalid auth header
 * Maps to a 401 HTTP code
 */
export default class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(message, 'unauthorized', 401);
  }
}
