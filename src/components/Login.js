import React, { Component, ProtoTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    render() {
        return (
            <div className="lg-wrapper">
                <div className="lg-content">
                    <p><label>Email</label><input name="email" type="email" value={this.state.email} onChange={this.handleChange}/></p>
                    <p><label>Password</label> <input name="password" type="password" value={this.state.password}  onChange={this.handleChange}/></p>
                    <p><a href="javascript:;" className="login" onClick={this.login}>Login</a></p>
                </div>
              
            </div>
        );
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    login() {
        console.dir(this.state.email);
        console.dir(this.state.password);
        if (this.state.email && this.state.password) {
            browserHistory.push('/home');
        }
    }
}

function mapStateToProps(state) {
    return { data: 'hello' }
}

export default connect()(Login)
