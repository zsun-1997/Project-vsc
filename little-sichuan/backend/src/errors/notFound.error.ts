import { BaseError } from '.';

/**
 * Not Found Error, when a lookup for some entity failed
 * Maps to a 404 HTTP code
 */
export default class NotFoundError extends BaseError {
  /**
     * Constructs a new NotFoundError
     * @param id used to find entity
     * @param entity trying to be found, to be appended to 'error.not-found.'
     */
  constructor(entity?: string, id?: string) {
    if (!entity) {
      super('Path not found', 'not-found', 404);
    } else if (!id) {
      super(`${entity} not found`, `not-found.${entity}`, 404);
    } else {
      super(`${entity} not found with ID: ${id}`, `not-found.${entity}`, 404);
    }
  }
}
