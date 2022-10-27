class Auth {
    constructor() {
        this.authenticated = false
    }

    login(callback) {
        this.authenticated = true;
        callback();
    }

    isCoachAuthenticated() {
        return this.authenticated;
    }

    isUserAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();

