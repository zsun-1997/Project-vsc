import { BaseError } from '.';

/**
 * Forbidden Error, when the user is not allowed to perform some action
 * Maps to a 403 HTTP code
 */
export default class ForbiddenError extends BaseError {
  /**
     * Constructs a new ForbiddenError
     * @param message describing what went wrong
     * @param code to be appended to 'error.forbidden.'
     */
  constructor(message: string, code: string) {
    super(message, `forbidden.${code}`, 403);
  }
}
