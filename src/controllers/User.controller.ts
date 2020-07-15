import UserService from '../services/User.service'
import { Request, Response } from 'express'
import CreateUserValidator from '../validators/CreateUserValidator'
import Log from '../log/Log'

class UserController {
    /**
     * GET get all users
     * @query limit
     */
    public async index(req: Request, res: Response): Promise<any> {
        const users = await UserService.list(req.query.limit)
        return res.status(200).json(users)
    }

    /**
     * GET get all users
     * @param id
     */
    public async show(req: Request, res: Response): Promise<any> {
        return res.json(await UserService.findById(req.params.id))
    }

    /**
     * POST create user
     */

    public async create(req: Request, res: Response): Promise<any> {
        const validator = CreateUserValidator.validate(req.body)
        if (!validator.valid) return res.status(422).json(validator.errors)

        try {
            const user = await UserService.create(req.body)
            return res.status(200).json({ user, successfull: true })
        } catch (e) {
            return res.status(422).json(e)
        }
    }
}

export default new UserController()
