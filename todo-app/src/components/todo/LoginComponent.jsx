
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'


class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "ducphuoc88",
            password: "123456",
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }




    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handlePassword(event) {
        console.log(event.target.value);
        this.setState({
            password: event.target.value,
        });
    }

    loginClicked() {
        // console.log(this.state);
        // if (this.state.username === 'ducphuoc88' && this.state.password === '123456') {

        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     // this.props.history.push("/welcome");
        //     // console.log('Successful')
        //     // this.setState({hasLoginFailed: false});
        //     // this.setState({showSuccessMessage: true});
        // } else {
        //     console.log('Failed')
        //     this.setState({ hasLoginFailed: true });
        //     this.setState({ showSuccessMessage: false });
        // }

        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);  
            }
        ).catch(
            () => {
                this.setState({ hasLoginFailed: true });
                this.setState({ showSuccessMessage: false });
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">

                </div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                <ShowLoginSuccessMessage showLoginSuccessMessage={this.state.showSuccessMessage} />
                User Name :  <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password  :  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>;
//     } else {
//         return null;
//     }
// }

function ShowLoginSuccessMessage(props) {
    if (props.showLoginSuccessMessage) {
        return <div>Login Successful</div>;
    } else {
        return null;
    }
}

export default LoginComponent;