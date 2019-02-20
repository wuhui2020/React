import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from './model/Routers.js'  //引入路由模块

// const route = [
//   {
//     path:'/',
//     component:Home,
//     exact:true
//   },
//   {
//     path:'/user',
//     component:User,
      // routes:[
      //   {
      //     path:"/user/",
      //     component:Main,
      //     exact:true
      //   },
      //   {
      //     path:"/user/info",
      //     component:Info
      //   }
      // ]
//   },
//   {
//     path:'/item',
//     component:Item
//   },
//   {
//     path:'/news',
//     component:News
//   },
//   {
//     path:'/login',
//     component:Login
//   },
//   {
//     path:'/itemDetail/:id',
//     component:ItemDetail
//   },
//   {
//     path:'/newsDetail',
//     component:NewsDetail
//   }

// ]
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
      <div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">新闻</Link>
        </li>
        <li>
          <Link to="/user">用户</Link>
        </li>
        <li>
          <Link to="/item">商品</Link>
        </li>
      </ul>


        {/**exact 表示严格匹配 */}
        {/* <Route exact path="/" component={Home} />
        
        <Route path="/user" component={User} />
        <Route  path="/item" component={Item} />
        <Route path="/itemDetail/:id" component={ItemDetail} />

        <Route path="/news" component={News} /> */}
        {/**<Route path="/newsDetail" component={NewsDetail} /> */}
        {/**动态路由传值 */}
        {/* <Route path="/newsDetail/:aid" component={NewsDetail} /> */}
        {/**get传值 */}
        {/* <Route path="/newsDetail" component={NewsDetail} />

        <Route path="/login" component={Login} /> */}

        {/**路由模块分离 */}
        {
          routes.map((route,key)=>{
            if(route.exact){
              return(
                // <Route key={key} exact path={route.path} component={route.component} />
                <Route key={key} exact path={route.path} 
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}/>
              )
            }else{
              return(
                // <Route key={key} exact path={router.path} component={router.component}/>
                <Route key={key} path={route.path} 
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}/>
              )
            }
            
          })
        }

      </div>
      </Router>
    );
  }
}

export default App;
