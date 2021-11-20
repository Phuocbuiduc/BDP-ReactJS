import axios from "axios"

class HelloWorldService{
    
    executeHelloWorldPathService(){
        let username = 'admin'
        let password = 'admin123'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        
        console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world/path-variable/phuoc',
            {
                headers : {
                    authorization: basicAuthHeader
                }
            }
        )
        
    }


}

export default new HelloWorldService()