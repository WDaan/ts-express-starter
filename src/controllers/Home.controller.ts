import { Request, Response } from 'express'

class HomeController {
    /**
     * GET version
     */
    public index(req: Request, res: Response): Response<any> {
        return res.json({
            msg: 'API server online 🚀',
            version: process.env.npm_package_version
        })
    }
}

export default new HomeController()
