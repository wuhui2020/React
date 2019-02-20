import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            domain:'http://a.itying.com/'
        };
    }
    //api = http://a.itying.com/api/productlist
    // 详情：http://a.itying.com/api/productcontent?id=
  
    getItem =()=>{
        var api = 'http://a.itying.com/api/productlist';
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
        this.getItem()
        
    }
    
    render() {
        return (
            <div>
                <h2>商品页</h2>
                <p><Link to="{/itemDetail}">Demo</Link></p>

                    {this.state.list.map((value,key)=>{
                       return(
                           <div key={key}>
                            <h2 >{value.title}</h2>
                            <ul className="itemul">
                                {value.list.map((val,k)=>{
                                    return(<li className="itemStyle" key={k}>
                                        <Link to={`/ItemDetail/${val._id}`}><img src={this.state.domain+val.img_url} alt=""/></Link>
                                        <p>{val.title}</p>
                                    </li>)
                                })}
                            </ul>
                            </div>
                       ) 
                    })}

                
            </div>
        );
    }
}

export default Item;