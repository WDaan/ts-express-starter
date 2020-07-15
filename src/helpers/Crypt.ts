import * as bcrypt from 'bcrypt'

class Crypt {
    /**
     * Define salt rounds for hash method
     */
    private saltRounds: number = 8

    /**
     * Helper method for password crypt
     * @param password
     */
    public async hash(password: string): Promise<object> {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(password, this.saltRounds, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    }

    /**
     * Used to compare passwords when one of the password is hashed
     * @param password
     * @param passwordToCompare
     */
    public async compare(
        password: string,
        passwordToCompare: string
    ): Promise<object> {
        return await new Promise((resolve, reject) => {
            bcrypt.compare(password, passwordToCompare, (err, pass) => {
                if (err) {
                    reject(err)
                }
                resolve(pass)
            })
        })
    }
}

export default new Crypt()
