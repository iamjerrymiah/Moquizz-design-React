import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import './SignupPage.css';

class SignupPage extends Component {
    render(){
        return (
            <Aux>
            <div className="container">
            <div className="card">
                <div className="card_title">
                <h1>Create Account</h1>
                <span>Already have an account? <NavLink to="/login">Sign In</NavLink></span>
                </div>
                <div className="form">
                <form >
                <input type="text" name="username" placeholder="User Name" />
                <input type="email" name="email" placeholder="Email" id="email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Sign Up</button>
                </form>
                </div>
               
            </div>
            </div>
            </Aux>
        )
    }
}

export default SignupPage;