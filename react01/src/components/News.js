import React from 'react';
import Head from "./Head";
import psb from '../assets/images/psb.jpg';

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headTitle:'新闻组件头部',
            newsinfo:"新闻组件",
            title:"我是一个title",
            list:["11","22","33"],
            list1:[
                {title:"新闻111"},
                {title:"新闻222"},
                {title:"新闻444"},
                {title:"新闻333"}
            ]
        };
    }
    run=()=>{
        alert("我是News父组件的run方法")
    }
    getData=()=>{
        alert(this.state.newsinfo)
    }
    //获取子组件传过来的参数
    getChild=(result)=>{
        alert(result)
    }
    render(){
        return(
            <div>

                {/**父子组件传值和方法 正个组件传经子组件news={this} */}
                <Head title={this.state.headTitle} run={this.run} that={this}></Head>

                <h1 title={this.state.title}>{this.state.newsinfo}</h1>
                <ul>
                    {this.state.list.map((value,key)=>{
                        return <li key={key}>{value}</li>}) 
                    }

                    {this.state.list1.map((value,key)=>{
                        return <li key={key}>{value.title}</li>}) 
                    }

                </ul>
                <br/>
                {/**不能用class 改成className */}
                <div className="red">绑绽class</div>

                {/**style样式须用{{}} */}
                <p style={{color:"blue"}}>ppppppppp</p>

                <br/>
                {/**不能用for 改成htmlFor */}
                <label htmlFor="name">姓名</label>
                <input id="name"/>
                <br/>
                {/**图片引入本地两种方法*/}
                <img src={psb}/>
                <br/>
                <img src={require('../assets/images/psb.jpg')}/>
                <br/>
                {/**引入网上(远程)图片*/}
                <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3914733144,3386638565&fm=173&app=25&f=JPEG?w=218&h=146&s=C680EEA146410FE58029BC4C0300A053"/>
            </div>

        )
    }
}