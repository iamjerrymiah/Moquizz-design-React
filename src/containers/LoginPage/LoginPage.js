import React, { Component } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import './LoginPage.css';

class LoginPage extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }


    loginHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }

        const logOrder = {
            logData: formData
        }

        axios.post( 'https://www.ourtechengineering.com/login', logOrder )
            .then( response => {
                console.log(logOrder);
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }


    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }


inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
    }




    render(){
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        let form = (
            <form onSubmit={this.loginHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button style={ {backgroundColor: 'rgb(21, 21, 75)', color: 'white', width: '180px', height: '45px'} }>Login</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <Aux>
                <div className="LoginData">
                    <h4>Log Into Your Account</h4>
                        {form}
                </div>
            </Aux>
        );
    }
}

export default LoginPage;