import axios from "axios"

class HelloWorldService{
    
    executeHelloWorldPathService(){
        console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world/path-variable/phuoc')
        
    }


}

export default new HelloWorldService()