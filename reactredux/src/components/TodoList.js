import React , {Component } from 'react';
import { connect } from "react-redux";
import {tiggle_todo} from '../actions/index.js' //引入action
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
       const {list,tiggleTodo,listState} = this.props
    //    console.log(listState)
        return (
            <div>
                <ul>
                    {
                        list.map((value,key)=>{
                            if(listState.filter == "todo"){
                                if(value.isDone == false){
                                    return(<li style={{textDecorationLine:value.isDone?"line-through":"none"}} onClick={()=>tiggleTodo(value.id)} key={key} >{value.todo}</li>)
                                }
                            }else if(listState.filter == "done"){
                                if(value.isDone == true){
                                    return(<li style={{textDecorationLine:value.isDone?"line-through":"none"}} onClick={()=>tiggleTodo(value.id)} key={key} >{value.todo}</li>)
                                }
                            }else{
                                return(<li style={{textDecorationLine:value.isDone?"line-through":"none"}} onClick={()=>tiggleTodo(value.id)} key={key} >{value.todo}</li>)
                            }
                            
                        })
                    }
                </ul>
            </div>
        );
    }
}
var mapStateToProps = function(state,ownProps){
    console.log(state)
    return {
        list:state.todoReducer,
        listState:state.filterReducer
    }
  }
  var mapDispatchToProps = function(dispatch,ownProps){
    return {
        tiggleTodo: function(id){
            dispatch(tiggle_todo(id))
        }
    }
  }

TodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoList;