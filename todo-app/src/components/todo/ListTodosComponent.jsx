
import moment from 'moment';
import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';


export default class ListToDosComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            // todos: [
            //     { id: 1, description: 'Learn HTML', done: false, targetDate: new Date() },
            //     { id: 2, description: 'Learn CSS', done: false, targetDate: new Date() },
            //     { id: 3, description: 'Learn Javascipt', done: false, targetDate: new Date() },
            //     { id: 4, description: 'Learn Jquery', done: false, targetDate: new Date() },
            //     { id: 5, description: 'Learn Ajax', done: false, targetDate: new Date() }
            // ]
            todos: [],
            message : null
               
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos()
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggerdInUserName();

        TodoDataService.retrieveAllTodos(username)
        .then( response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleErrorResponse(error))
    }

    handleSuccessfulResponse = (response) => {
        this.setState({
            message: "Load sucessful!",
            todos: response.data
       })
       console.log("messsage: " + this.state.message)
    }

    handleErrorResponse = (error) => {
        this.setState({
            message: error.message,
       })
       console.log("messsage: " + this.state.message)
    }

    deleteToDoClicked = (id) =>{
        let username = AuthenticationService.getLoggerdInUserName();
        TodoDataService.deleteTodo(username, id)
        .then( response => {
            this.setState({
                 message: "Delete sucessful 1 todo"
            })
            this.refreshTodos()
            console.log("messsage: " + this.state.message)
            
        })
        .catch(error => {
            this.setState({
                message: error.message
           })
           console.log("messsage: " + this.state.message)
        })
    }

    updateToDoClicked = (id) =>{
        console.log("Update todo: " +id);
        // /todos/${id}
        this.props.history.push(`/todos/${id}`);
       
    }

    addToDoClicked = () =>{
        console.log("add todo: ");
        // /todos/${id}
        this.props.history.push(`/todos/-1`);
       
    }


    render() {
        console.log('render()')
        return (<div>
            <h1>List ToDos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                 <div className="row">
                    <button  onClick={this.addToDoClicked} className="btn btn-primary btn-lg btn-block"> Add new todo</button>
                </div>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td className="text-align-center">{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD HH:mm:ss')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>
                                            {/* <button className="btn btn-success">Edit</button> */}
                                            <button onClick={() => this.updateToDoClicked(todo.id)} className="btn btn-success">Update</button>
                                        </td>
                                        <td>
                                            {/* <button className="btn btn-success">Edit</button> */}
                                            <button onClick={() => this.deleteToDoClicked(todo.id)} className="btn btn-warning">Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        </div>)
    }
}