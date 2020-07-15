import * as winston from 'winston'

class Log {
    /**
     * Place where logs will be saved
     */
    private filename: string = 'combined.log'

    /**
     * Logger instance
     */
    private logger: winston.Logger

    /**
     * Logger levels
     */
    public ERROR: string = 'error'
    public WARN: string = 'warn'
    public INFO: string = 'info'
    public VERBOSE: string = 'verbose'
    public DEBUG: string = 'debug'
    public SILLY: string = 'silly'

    public constructor() {
        const { combine, timestamp, simple, colorize } = winston.format

        this.logger = winston.createLogger({
            silent: process.env.LOGS === 'ON' ? false : true,
            format: combine(timestamp(), simple()),
            transports: [
                new winston.transports.File({ filename: this.filename })
            ]
        })

        if (process.env.NODE_ENV === 'development') {
            this.logger.add(new winston.transports.Console())
        }
    }

    /**
     * Store log
     * @param level
     * @param message
     */
    public save(level: string, message: string): void {
        this.logger.log(level, message)
    }
}

export default new Log()
