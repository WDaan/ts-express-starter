import { User, UserDTO } from '../models/User.model'
import { response } from 'express'

class UserService {
    constructor(private model) {}

    async list(lim) {
        const users = await this.model
            .find({})
            .sort({ createdAt: -1 })
            .limit(Number(lim))

        return users.map(u => new UserDTO(u))
    }

    async create(obj: any) {
        return new this.model(obj).save().then(user => new UserDTO(user, true))
    }

    findByEmail(email: string) {
        return this.model.find({ email }).then(u => new UserDTO(u, true))
    }

    findById(_id: string) {
        return this.model.findById(_id).then(u => new UserDTO(u, true))
    }
}

export default new UserService(User)
