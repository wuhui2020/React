import React,{ Component} from 'react';
import { connect } from "react-redux";
import {filter_todo} from '../actions/index.js' 
import '../assets/css/FilterTodo.css'
class FilterTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {filterTodo} =  this.props
        return (
            <div>
                <ul className="ullist">
                    <li onClick={()=>filterTodo('all')}>ALL</li>
                    <li onClick={()=>filterTodo('todo')}>TODO</li>
                    <li onClick={()=>filterTodo('done')}>DONE</li>
                </ul>
            </div>
        );
    }
}


var mapStateToProps = function(state,ownProps){
    // console.log(state)
    return {
        filter:state.filterReducer
    }
  }
  var mapDispatchToProps = function(dispatch,ownProps){
    return {
        filterTodo: function(newFilter){
            dispatch(filter_todo(newFilter))
        }
    }
  }

FilterTodo = connect(mapStateToProps,mapDispatchToProps)(FilterTodo)
export default FilterTodo;