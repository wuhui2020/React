import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    aid:"1",
                    title:"新闻111"
                },
                {
                    aid:"2",
                    title:"新闻222"
                },
                {
                    aid:"3",
                    title:"新闻3333"
                },
                {
                    aid:"4",
                    title:"新闻4444"
                }
            ]
          };
    }
    render() {
        return (
            <div>
            <div>我是Newsn页面</div> 

            <ul>
                {
                    this.state.list.map((value,key)=>{
                        //return(<li key={key}><Link to={'/newsDetail'}>{value.title}</Link></li>)

                        //动态路由传值 ``ES6模板字符串tab上的个按键  样式：http://localhost:3003/NewsDetail/1
                        // return(<li key={key}><Link to={`/NewsDetail/${value.aid}`}>{value.title}</Link></li>)

                        //get传值 样式： http://localhost:3003/NewsDetail?aid=1
                        return(<li key={key}><Link to={`/NewsDetail?aid=${value.aid}`}>{value.title}</Link></li>)
                    })
                }
            </ul>
            
            </div>
        );
    }
}

export default News;