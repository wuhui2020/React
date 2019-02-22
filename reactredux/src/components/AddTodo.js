import React, { Component } from "react";
import { connect } from "react-redux";

import uuid from 'uuid';            //引入uuid
import {add_todo} from '../actions/index.js' //引入action


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {addTodo } = this.props
        return (
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    // console.log(this.input.value)
                    if(this.input.value){
                        addTodo( uuid(),this.input.value);
                        this.input.value = '';
                    }
                }}>
                    <input type="text" ref={
                        (node)=>{
                            this.input = node
                        }
                    }/>
                    <input type='submit' value="addTodoList" />
                </form>
            </div>
        );
    }
}
var mapStateToProps = function(){
    return {}
  }
  var mapDispatchToProps = function(dispatch,ownProps){
    return {
      addTodo: function(id,newTodo){
        dispatch(add_todo(id,newTodo))
      }
    }
  }
  
 
AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodo)
export default AddTodo;