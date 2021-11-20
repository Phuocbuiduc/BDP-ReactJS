class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log("login successful!")
        sessionStorage.setItem('authenticateUser', username);
    }

    logout(){
        console.log("Logout successful!")
        sessionStorage.removeItem('authenticateUser');
    }

    isUserLoggedIn(){
        let user =  sessionStorage.getItem('authenticateUser');
        if (user === null) return false;
        return true;
    }


    getLoggerdInUserName(){
        let user = sessionStorage.getItem('authenticateUser');
        if (user == null){
            return '';
        }

        return user;

    }
}


export default new AuthenticationService();