import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            domain:"http://a.itying.com/"
        };
    }
    getItemDetail =(itemid)=>{
        // console.log(itemid)
        var api = this.state.domain+'api/productcontent?id='+itemid;
        axios.get(api)
        .then((response)=> {
            // console.log(response);
            let data = response.data.result;
            // console.log(data);
            this.setState({
                list:data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount(){
        // console.log(this.props)
        // console.log(this.props.match.params.id)
        this.getItemDetail(this.props.match.params.id)
    }
    //react解释html代码 dangerouslySetInnerHTML={{__html:value.content}}
    render() {
        return (
            <div>
                <Link to='/item'>返回</Link>
                <h2>商中详情</h2>
                    
                    {this.state.list.map((value,key)=>{
                       return(
                           <div key={key}>
                                <h2>{value.title}</h2>
                                <img src={this.state.domain+value.img_url}/>
                                {/**解释html代码 */}
                                <p dangerouslySetInnerHTML={{__html:value.content}}></p>
                           </div>
                       ) 
                    })}

            </div>
        );
    }
}

export default ItemDetail;