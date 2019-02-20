import React,{ Component } from 'react';
import FetJson from 'fetch-jsonp'

class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
          };
    }
    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        FetJson(api)
        .then(function(response) {
            return response.json()
        }).then((json)=> {
            // console.log('parsed json', json)
            this.setState({
                list:json.result
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })

    }
    render() {
        return (
            <div>
                <h1>FetchJsonp</h1>
                <button onClick={this.getData}>FetchJsonp获取服务器数据</button>
                <ul>
                    {this.state.list.map((value,key)=>{
                        return(<li key={key}>{value.title}</li>)
                    })}
                </ul>



            </div>
        );
    }
}

export default FetchJsonp;