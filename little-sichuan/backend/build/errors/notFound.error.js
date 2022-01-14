"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/**
 * Not Found Error, when a lookup for some entity failed
 * Maps to a 404 HTTP code
 */
class NotFoundError extends _1.BaseError {
    /**
       * Constructs a new NotFoundError
       * @param id used to find entity
       * @param entity trying to be found, to be appended to 'error.not-found.'
       */
    constructor(entity, id) {
        if (!entity) {
            super('Path not found', 'not-found', 404);
        }
        else if (!id) {
            super(`${entity} not found`, `not-found.${entity}`, 404);
        }
        else {
            super(`${entity} not found with ID: ${id}`, `not-found.${entity}`, 404);
        }
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=notFound.error.js.map