import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world')
        
    }

    executeHelloWorldBeanService(){
        console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world-bean')
        
    }

    executeHelloWorldPathService(){
        console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world/path-variable/phuoc')
        
    }


}

export default new HelloWorldService()