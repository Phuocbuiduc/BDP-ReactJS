import axios from 'axios';

class AuthenticationService{


    executeBasicAuthenticationService(username, password){
        console.log(this.createBasicAuthToken(username, password))
        return axios.get('http://localhost:8080/basicauth', {headers: {authorication: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password){
       return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password){
        console.log(username + password)
        console.log("login successful!")
        sessionStorage.setItem('authenticateUser', username);
        this.setupAxiosInterceptors( this.createBasicAuthToken(username, password))
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

    setupAxiosInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}


export default new AuthenticationService();