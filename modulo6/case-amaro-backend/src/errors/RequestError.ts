import { BaseError } from "./BaseError";

export class RequestError extends BaseError {
    constructor(
        message: string = "Requisição invalida"
    ) {
        super(400, message)
    }
}