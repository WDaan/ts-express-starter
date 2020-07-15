abstract class Middleware {
    /**
     * Middleware handler
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    public abstract handle(req, res, next): void
}

export { Middleware }
