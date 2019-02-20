import React,{ Component } from 'react';

import Storage from "../model/storage"; //引入封装好的缓存模块

class Todllist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputval:"111",
            list:[]
        };

    }
    //生命周期函数
    componentDidMount(){
        //取缓存数据
        //JSON.parse解释数据
        // let todolist = JSON.parse(localStorage.getItem("todolist"));
        let todolist = Storage.storageGet("todolist");
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }
    setInputVal=(e)=>{
        
        this.setState({
            inputval:e.target.value
        })
    }
    
    addList=()=>{
        if(this.refs.inpval.value){
            let add = this.state.list;
            add.push({value:this.refs.inpval.value,checked:false})
            this.setState({
                list:add
            })
            this.refs.inpval.value = "";
            //缓存数据
            //localStorage.setItem("todolist",JSON.stringify(add))
            Storage.storageSet("todolist",add);
            // console.log(this.state.list)
        }
    }
    //回车触发事件
    setKeyUp=(e)=>{
        if(e.keyCode == 13){
            if(this.refs.inpval.value){
                let add = this.state.list;
                add.push({value:this.refs.inpval.value,checked:false})
                this.setState({
                    list:add
                })
                this.refs.inpval.value = "";
                //缓存数据
                // localStorage.setItem("todolist",JSON.stringify(add))
                Storage.storageSet("todolist",add);
            }
            
        }
    }
    setCheck=(key)=>{
        let add = this.state.list;
        add[key].checked = !add[key].checked
        this.setState({
            list:add
        })
        //缓存数据
        // localStorage.setItem("todolist",JSON.stringify(add))
        Storage.storageSet("todolist",add);
    }
    
    del=(key)=>{
        let add = this.state.list;
        add.splice(key,1)
        this.setState({
            list:add
        })
        //缓存数据
        // localStorage.setItem("todolist",JSON.stringify(add))
        Storage.storageSet("todolist",add);
    }
    render() {
        return (
            <div>
                <h2>双向数据绑绽==MVVM</h2>
                {/**
                    约束性和非约束性组件：
                    1.非约束性组件<input type="text" defaultValue="" /> 这个defaultValue其实就是原生DOM
                        中的value性性，这样写出的来组件,其value值就是用户输入的内容，React完全不管理输入的过程
                    2.约束性组件：<input type="text" value={this.state.inpvalue} onChange={this.xxx} />
                        这里，value属性不再是一个写死的值，他是this.state.inpvalue是由this.xxx负责管理的
                        这个时候实际上,input的value根本不是用户输入的内容，而是onChange事件触发之后，由于
                        this.setState导致了一次重新渲染，不过React会优化这个渲染过程
                */}
                <div>{this.state.inputval}</div>
                <input value={this.state.inputval} onChange={this.setInputVal}/>
                <button onClick={()=>this.setState({inputval:"改变了inputval"})}>改变inputval</button>
                
                <h2>Todolist 案例演示</h2>
                <input type="text"  ref="inpval" onKeyUp={this.setKeyUp}/><button onClick={this.addList}>添加</button>
                
                <h4>未完成</h4>
                <ul>
                    {this.state.list.map((val,key)=>{
                        if(!val.checked){
                            return( 
                            <li key={key}>
                                <input type="checkbox" checked={val.checked} onChange={this.setCheck.bind(this,key)}/>
                                {val.value} ---
                                <button onClick={this.del.bind(this,key)}>删除</button>
                            </li>)
                        }
                        
                    })}
                </ul>
                <h4>已完成</h4>
                <ul>
                    {this.state.list.map((val,key)=>{
                        if(val.checked){
                            return( 
                            <li key={key}>
                                <input type="checkbox" checked={val.checked} onChange={this.setCheck.bind(this,key)}/>
                                {val.value} ---
                                <button onClick={this.del.bind(this,key)}>删除</button>
                            </li>)
                        }
                        
                    })}
                </ul>
            
            
            </div>
        );
    }
}

export default Todllist;