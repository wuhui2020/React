import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './user/Main';
import Info from './user/Info';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        //获取传过来的路由地址
        // console.log(this.props.routes)
    }
    render() {
        return (
           <div>
               <h2>用户组件</h2>
                <div className="wrap">
                    <div className="left">
                    <ul>
                        <li>
                        <Link to="/user/">个人中心</Link>
                        </li>
                        <li>
                        <Link to="/user/info">用户信息</Link>
                        </li>
                        
                    </ul>
                    </div>
                    <div className="right">
                        {/**两跳转方式地址写法 */}
                        {/* <Route exact path="/user/" component={Main} />
                        <Route  path={`${this.props.match.url}/info`} component={Info} /> */}
                        {this.props.routes.map((route,key)=>{
                            if(route.exact){
                                return <Route key={key} exact path={route.path} component={route.component} />
                            }else{
                                return <Route  key={key}  path={route.path} component={route.component} />
                            }
                        })}
                    </div>


                </div>



           </div> 
        );
    }
}

export default User;