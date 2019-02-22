//添加一个待办事项
export const ADD_TODO = 'ADD_TODO';
export const add_todo = function(id,newTodo){
    return {
        type:ADD_TODO,
        id,
        newTodo
    }
}
//改变事务状态
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const tiggle_todo = function(id){
    return {
        type:TOGGLE_TODO,
        id
    }
}

//切换例表
export const  FILTER_TODO = 'FILTER_TODO';
export const filter_todo = function(newFilter){
    return {
        type:FILTER_TODO,
        newFilter
    }
}