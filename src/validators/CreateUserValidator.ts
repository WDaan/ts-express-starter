import { IValidator, ValidationResponse } from './IValidator'
import * as AJV from 'ajv'
const ajv = new AJV()

const userValidationSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        firstname: { type: 'string', maximum: 100 },
        lastname: { type: 'string', maximum: 100 },
        email: { format: 'email' },
        password: { type: 'string', maximum: 200, minimum: 5 }
    },
    required: ['email', 'password']
}

class CreateUserValidator implements IValidator {
    validate(obj: Object): ValidationResponse {
        const valid = ajv.validate(userValidationSchema, obj)
        return new ValidationResponse(valid ? true : false, ajv.errors)
    }
}

export default new CreateUserValidator()
