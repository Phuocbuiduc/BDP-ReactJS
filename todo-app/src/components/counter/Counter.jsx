import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

export default class counter extends Component {


    constructor() {
        super(); //Error 1;
        this.state = {
            countResult: 0
        }
        this.increament = this.increament.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <CounterButton by={-5} increamentMemthod={this.increament} />
                <CounterButton by={5} increamentMemthod={this.increament} />
                <CounterButton by={10} increamentMemthod={this.increament} />
                <CounterButton by={0} increamentMemthod={this.increament} />
                <ResetButton reset={0} resetMethod={this.reset}></ResetButton>
                {this.state.countResult}
            </div>
        );
    }

    reset(val) {

        this.setState({
            countResult: val,
        });
    };

    increament(by) { //Update state
        console.log(by);

        this.setState({
            countResult: this.state.countResult + by
        });
    }
}

export class CounterButton extends Component {

    //Define the inital state in a constructor
    //state => counter 0
    // constructor() {
    //     super(); //Error 1;
    //     this.state = {
    //         count: 0,
    //     }

    //     this.increament = this.increament.bind(this);
    // }

    render() {
        //render = () => {
        let style = { fontSize: "50", padding: "15px 30px" };
        return (
            <div className="counterButton">
                <button onClick={() => this.props.increamentMemthod(this.props.by)}>+{this.props.by}</button>
                {/* <span>{this.state.count}</span>  */}
            </div>
        )
    }

    increament() { //Update state

        this.setState((prevState) => {
            return {count: prevState.count + this.props.by}
        });


        this.props.increamentMemthod(this.props.by);
    }


}

export class ResetButton extends Component {

    //Define the inital state in a constructor
    //state => counter 0
    constructor() {
        super(); //Error 1;
        this.state = {
            reset: 0,
        }

        this.reset = this.reset.bind(this);
    }

    render() {
        //render = () => {
        let style = { fontSize: "50", padding: "15px 30px" };
        return (
            <div className="ResetButton">
                <button onClick={this.reset}>Reset to {this.props.reset}</button>
                {/* <span>{this.state.count}</span>  */}
            </div>
        )
    }

    reset() { //Update state
        this.props.resetMethod(this.props.reset);
    }


}


CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}


