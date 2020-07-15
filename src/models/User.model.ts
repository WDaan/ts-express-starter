import * as bcrypt from 'bcrypt'
import { Document, Model, model, Schema, HookNextFunction } from 'mongoose'
import * as uniqueValidator from 'mongoose-unique-validator'

export interface IUser extends Document {
    firstname: string
    lastname: string
    email: string
    password: string
    token: string
}

const UserSchema: Schema = new Schema(
    {
        firstname: { type: String },
        lastname: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: String
    },
    { timestamps: true }
)

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save', async function (next: HookNextFunction) {
    try {
        if (!this.isModified('password')) {
            return next()
        }
        const hashed = await bcrypt.hash(this['password'], 10)
        this['password'] = hashed
        return next()
    } catch (err) {
        return next(err)
    }
})

export const User: Model<IUser> = model<IUser>('User', UserSchema)

export class UserDTO {
    public _id: string
    public firstname: string
    public lastname: string
    public email: string
    public createdAt: Date
    public updatedAt: Date

    constructor(user: any, timestamps: boolean = false) {
        this._id = user._id
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.email = user.email

        if (timestamps) {
            this.createdAt = user.createdAt
            this.updatedAt = user.updatedAt
        }
    }
}
