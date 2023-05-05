// TODO look at what uses this and it's counterparts in newer version
class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout() {
        console.log("trying to log out")
        console.log(sessionStorage.getItem("bearer-token"))
        sessionStorage.removeItem('bearer-token')
    }
    isUserLoggedIn() {
        let token = sessionStorage.getItem('bearer-token')
        if (token === null) return false;
        return true;
    }

}

export default new AuthenticationService()