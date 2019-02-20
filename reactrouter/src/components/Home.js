import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>我是Home页面</div> 
                <div><Link to="/login">去登录</Link></div>
                
            </div>
        );
    }
}

export default Home;