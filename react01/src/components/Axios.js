import React,{ Component } from 'react';
import axios from 'axios'

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }
    
    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)

        .then((response)=> {
            // console.log(response.data.result);
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    render() {
        return (
            <div>
                <h1>axios</h1>
                <button onClick={this.getData}>axios获取服务器数据</button>
                <ul>
                    {this.state.list.map((value,key)=>{
                        return(<li key={key}>{value.title}</li>)
                    })}
                </ul>



            </div>
        );
    }
}

export default Axios;