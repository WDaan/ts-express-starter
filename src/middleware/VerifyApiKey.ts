import { Request, Response, NextFunction } from 'express'
import { Middleware } from '../middleware/Middleware'

class VerifyApiKey extends Middleware {
    /**
     * Authenticate api key
     * @param req
     * @param res
     * @param next
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        if (req.headers['x-api-key'] !== process.env.API_KEY) {
            res.status(400).json({ message: 'Unauthenticated x-api-key.' })
        }

        next()
    }
}

export default new VerifyApiKey()
