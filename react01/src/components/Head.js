import React, { Component } from 'react';
import PropTypes from "prop-types";


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        // console.log(this.props.that)
    }
    
    getNews=()=>{

        alert("获取到了News组件headTitle=="+this.props.that.state.headTitle)
        //执行父组件方法
        // this.props.that.getData()
    }
    render() {
        return (
            <div>
                <div>Head组件</div>
                <h4>父子组件传值===={this.props.title}</h4>
                <br/>
                <br/>
                <button onClick={this.props.run}>执行父组件方法</button>
                <br/>
                <br/>
                <button onClick={this.getNews}>获取父组件数据</button>
                <br/>
                <br/>
                {/* <button onClick={this.props.that.getData}>获取父组件方法</button> */}
                {
                   this.props.that!=undefined? <button onClick={this.props.that.getData}>获取父组件方法</button>:""
                }
                <br/>
                <br/>
                {
                   this.props.that!=undefined? <button onClick={this.props.that.getChild.bind(this,"我是子组件Head")}>子组件传值给父组件</button>:""
                }
                
            </div>
        );
    }
}
//默认属性值
Head.defaultProps={
    title:"Title默认值"
};
//propTypes定义父组件给子组件传值的类型
Head.propTypes={
    title:PropTypes.string
};


export default Head;