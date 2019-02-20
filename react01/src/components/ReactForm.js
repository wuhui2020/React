import React,{ Component } from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:"React表单",
            name:'',
            sex:"1",
            citys:["北京","上海","深圳"],
            city:"北京",
            hobby:[
                {title:"足球",checked:false},
                {title:"蓝球",checked:true},
                {title:"乒乓球",checked:true},
            ],
            info:""
        };
    }

    setName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    
    handleCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    setHobby=(key)=>{
        let hob = this.state.hobby;
        hob[key].checked = !hob[key].checked
        this.setState({
            hobby:hob
        })
    }
    handleInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }

    handelSubmit=(e)=>{
        e.preventDefault();
        
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info)
    }


    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>

                {/**用form表单提交要阻止默认事件 */}
                <form onSubmit={this.handelSubmit}>
                   用户名: <input type="text" value={this.state.name} onChange={this.setName}/>
                    <br/>
                    性别: <input type="radio" name="sex" value="1" checked={this.state.sex == 1} onChange={(e)=>this.setState({sex:e.target.value})}/>男
                    <input type="radio" name="sex" value="2" checked={this.state.sex == 2} onChange={(e)=>this.setState({sex:e.target.value})} />女
                    <br/>
                    居住城市:<select value={this.state.city} onChange={this.handleCity}>
                        {this.state.citys.map((value,key)=>{
                            return(<option key={key}>{value}</option>)
                        })}
                    </select>

                    <br/>
                    爱好: {this.state.hobby.map((value,key)=>{
                        return(<div key={key}><input type="checkbox" checked={value.checked} onChange={this.setHobby.bind(this,key)}/> {value.title}</div>)
                    })}
                    <br/>

                    文本：<textarea value={this.state.info} onChange={this.handleInfo} />

                    <br/>
                    <input type="submit" value="提交"/>
                </form>

            </div>
        );
    }
}

export default ReactForm;