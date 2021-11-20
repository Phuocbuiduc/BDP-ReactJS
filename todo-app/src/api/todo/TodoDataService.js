import axios from "axios"

class TodoDataService{
     
    retrieveAllTodos(username){
        let username1 = 'admin'
        let password = 'admin123'
        let basicAuthHeader = 'Basic ' + window.btoa(username1 + ":" + password)
        return axios.get(`http://localhost:8080/users/${username}/todos`,
        {
            headers : {
                authorization: basicAuthHeader
            }
        });
        
    }

    deleteTodo(username, id){
        let username1 = 'admin'
        let password = 'admin123'
        let basicAuthHeader = 'Basic ' + window.btoa(username1 + ":" + password)
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`,
        {
            headers : {
                authorization: basicAuthHeader
            }
        });
        
    }

    getTodo(username, id){
        let username1 = 'admin'
        let password = 'admin123'
        let basicAuthHeader = 'Basic ' + window.btoa(username1 + ":" + password)
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`,
        {
            headers : {
                authorization: basicAuthHeader
            }
        });
        
    }

    updateTodo(username, id, todo){
        let username1 = 'admin'
        let password = 'admin123'
        let basicAuthHeader = 'Basic ' + window.btoa(username1 + ":" + password)
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo,
        {
            headers : {
                authorization: basicAuthHeader
            }
        });
        
    }


}

export default new TodoDataService()