class Auth {
    // status: true if logged in
    // account: an account object
    // sessionKey: The session key sent from the server
    constructor(status, account, sessionKey) {
        this.authenticated = status
        this.account = account
        this.sessionKey = sessionKey
    }
}

export default Auth;