import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Credencial Invalida"
    ) {
        super(401, message)
    }
}