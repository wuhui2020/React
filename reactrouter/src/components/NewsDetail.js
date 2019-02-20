import React,{ Component } from 'react';
import url from 'url';
class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){
        //获取动态路由传值
        // console.log(this.props.match.params.aid)

        //获取get传值
        console.log(this.props.location.search)
        //可引入url模块来解释url地址  import url from 'url';
        console.log(url.parse(this.props.location.search))
        console.log(url.parse(this.props.location.search,true))
    }

    render() {
        return (
            <div>新闻详请页</div>
        );
    }
}

export default NewsDetail;