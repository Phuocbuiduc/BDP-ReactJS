import axios from "axios"

class TodoDataService{
     
    retrieveAllTodos(username){
        return axios.get(`http://localhost:8080/users/${username}/todos`);
        
    }

    deleteTodo(username, id){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
        
    }

    getTodo(username, id){
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
        
    }

    updateTodo(username, id, todo){
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
        
    }


}

export default new TodoDataService()