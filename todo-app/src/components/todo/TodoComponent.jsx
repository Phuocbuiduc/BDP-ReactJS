import React, { Component } from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import AuthenticationService from './AuthenticationService'
import TodoDataService from '../../api/todo/TodoDataService'


class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Should have at least 5 characters'
        } else if (values.description.length > 50) {
            errors.description = 'Should have at greater 50 characters'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a targetDate'
        }

        return errors;
    }


    componentDidMount = () => {
        let username = AuthenticationService.getLoggerdInUserName();

        if (this.props.match.params.id === -1) {
            return
        }
        TodoDataService.getTodo(username, this.props.match.params.id)
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate)
                    })
                }
            )

    }


    onSubmit = (values) => {
        console.log("update id: " + this.state.id);
        let username = AuthenticationService.getLoggerdInUserName();
        let todo = {
            id: this.props.match.params.id,
            description: values.description,
            targetDate: values.targetDate,
            username: username,
            idDone: false

        }

        if (this.props.match.params.id === -1) {
            TodoDataService.createTodo(username, todo).then(() => this.props.history.push('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo).then(() => this.props.history.push('/todos'))

        }



    }

    render() {
        let { description, targetDate } = this.state;
        //let targetDate = this.state.targetDate;

        return (<div>
            <br />
            <h2>Todo {this.props.match.params.id} {this.state.description}</h2>
            <div className="container text-align-left">
                <Formik
                    initialValues={{
                        description: description,
                        targetDate: moment(targetDate).format('YYYY-MM-DD')
                    }}

                    onSubmit={this.onSubmit}

                    validate={this.validate}

                    //dang nhu realtime
                    validateOnChange={false}
                    validateOnBlur={false}

                    //Neu khong set = true, thi set.state khong co tac dung
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="type" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                                <button className="btn btn-warning" type="submit">Cancel</button>
                            </Form>
                        )
                    }

                </Formik>

            </div>

        </div>)
    }
}

export default TodoComponent