import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:false
        };
    }

    doLogin = (e) =>{
        e.preventDefault();
        let username = this.refs.username.value;
        let pwd = this.refs.pwd.value;
        // console.log(username +'==='+pwd)
        if(username == "admit" && pwd == "1234"){
            this.setState({
                flag:true
            })
        }
    }

    render() {
        if(this.state.flag){
            // return <Redirect  to={{pathname:'/'}}/>
            return <Redirect  to='/'/>
        }
        return (
            
            <div>
                <form onSubmit={this.doLogin}>
                登录名：<input type="text" ref="username" /><br/><br/>
                密 码：<input type="password" ref="pwd" /><br/>
                <br/>
                <input type="submit" ref="登录" /><br/>
                </form>

            </div>
        );
    }
}

export default Login;