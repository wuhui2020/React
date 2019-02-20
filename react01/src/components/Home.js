import React, {Component } from 'react';
import Head from './Head';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            headTitle:"HOME页头部组件",
            msg:"定义数据",
            bindMsg:"绑绽this",
            bindMsg1:"构造函数内绑绽this",
            inputval:"111"
        };
        this.getMsg2 = this.getMsg2.bind(this);
    };

    run(){
        alert("我是一个run方法")
    }

    getMsg=()=>{
        alert(this.state.msg)
    }
    getMsg1(){
        alert(this.state.bindMsg)
    }
    getMsg2(){
        alert(this.state.bindMsg1)
    }
    setDate=()=>{
        this.setState({
            msg:"改变了MSG"
        })
    }
    
    run=(e)=>{
        console.log(e)
        console.log(e.currentTarget)
        e.target.style.background="red";
        //获取自定义属性
        console.log("aid ="+ e.target.getAttribute("aid"))
    }

    inputChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            inputval:e.target.value
        })
    }
    getInputVal=()=>{
        console.log(this.state.inputval)
    }
    inputRefChange=()=>{
        //获取dom节点
        let val = this.refs.inp.value
        this.setState({
            inputval:val
        })
    }


    inputKeyUp=(e)=>{
        //回车 keycode == 13
        console.log(e)
        if(e.keyCode == 13){
            console.log(e.target.value)
        }
    }
    render(){
        return(
            <div>
                <Head title={this.state.headTitle}></Head>
                <div>Home组件</div>
                <h2>{this.state.msg}</h2>

                <button onClick={this.run}>执行run方法</button>

                {/**防止this指向丢失 */}
                <button onClick={this.getMsg}>剑头方法保存this指向</button>
                <button onClick={this.getMsg1.bind(this)}>调用是绑绽this</button>
                <button onClick={this.getMsg2}>构造函数内绑绽this</button>
                <hr/>
                <br/>
                <button onClick={this.setDate}>改变msg</button>
                <button onClick={()=>this.setState({
                    msg:"传参改变msg"
                })}>传参改变msg</button>
                <hr/>
                <br/>
                <h2>事件对像</h2>
                <button aid="111" onClick={this.run}>事件对像</button>
                <hr/>
                <br/>
                <h2>表单事件</h2>
                {/**通过事件来获取input的value */}
                <input value={this.state.inputval} onChange={this.inputChange}/>
                <button onClick={this.getInputVal}>获取input的val</button>
                {/**通过dom来获取input的value */}
                <input ref="inp" value={this.state.inputval} onChange={this.inputRefChange}/>
                <button onClick={this.getInputVal} >通过ref获取input的val</button>
                <hr/>
                <br/>
                <h2>键盘事件</h2>
                <input onKeyUp={this.inputKeyUp} />

            </div>
            
        )
    }

}
export default Home