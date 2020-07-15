export interface IValidator {
    /**
     * Common validation method
     */
    validate(req: any): ValidationResponse
}

export class ValidationResponse {
    constructor(public valid: Boolean, public errors: Array<any>) {}
}
