
import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

export default class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.state = {
            welcomeMessage: ''
        }
    }

    render (){
        return (<div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {this.props.match.params.name} to ToDoApp!
                You can mange your todos <Link to={`/todos/`}> here</Link>
            </div>

            <div className="container">
               <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Call API /hello-world</button>  
                <button onClick={this.retrieveWelcomeMessageFromBean} className="btn btn-success">Call API /hello-world-bean</button>
                <button onClick={this.retrieveWelcomeMessageFromPath} className="btn btn-success">Call API /hello-world/path-variable/phuoc</button>

                {this.state.welcomeMessage}  
             </div>
        </div>)
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldService()
        .then(
            response => this.handleSuccessfulResponse(response)
        )
        // .catch()
    }

    retrieveWelcomeMessageFromBean = () => {
        HelloWorldService.executeHelloWorldBeanService()
        .then(
            response => {
                this.setState({
                    welcomeMessage : response.data.message
                })
            }
        )
        // .catch()
    }

    retrieveWelcomeMessageFromPath = () => {
        HelloWorldService.executeHelloWorldPathService()
        .then(
            response => {
                this.setState({
                    welcomeMessage : response.data.message
                })
            }
        )
        .catch(
            error => this.handleErrorResponse(error))
    }

    handleSuccessfulResponse = (response) => {
        this.setState({
            welcomeMessage: response.data
        })
    }

    handleErrorResponse = (error) => {
        this.setState({
            welcomeMessage: error.message
        })
    }

}

