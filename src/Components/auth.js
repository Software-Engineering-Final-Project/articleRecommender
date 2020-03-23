class Auth {

    constructor() {
        this.authenticated = false
        this.account = null
    }

    login(callback, account) {
        this.authenticated = true
        this.account = account
        callback()
    }


    logout(callback) {
        this.authenticated = false
        this.account = null
        callback()
    }

    isAuthenticated() {
        return this.authenticated
    }

}


export default new Auth();