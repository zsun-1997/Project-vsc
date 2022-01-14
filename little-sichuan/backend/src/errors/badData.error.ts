import { BaseError } from '.';

/**
 * Bad Data Error, when request params are incorrect
 * Maps to a 400 HTTP code
 */
export default class BadDataError extends BaseError {
  /**
     * Constructs a new BadDataError
     * @param message describing what went wrong
     * @param code to be appended to 'error.bad-data.'
     */
  constructor(message: string, code: string, targets?: string[]) {
    super(message, `bad-data.${code}`, 400, targets);
  }
}
