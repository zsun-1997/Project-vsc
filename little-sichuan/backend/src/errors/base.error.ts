/**
 * Base Error for all Errors to extend
 */
export default class BaseError extends Error {
    message: string;

    code: string;

    targets?: string[];

    httpStatusCode: number;

    constructor(message: string, code: string, httpStatusCode: number, targets?: string[]) {
      super();
      this.message = message;
      this.code = `error.${code}`;
      this.targets = targets;
      this.httpStatusCode = httpStatusCode;
    }
}
