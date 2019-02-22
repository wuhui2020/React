import { FILTER_TODO } from '../actions';
var filterReducer = function(state,action){
    if(!state){
        return {
            filter:'all'
        }
    }
    switch(action.type){
        case FILTER_TODO:
            return {
                ...state,
                filter:action.newFilter
            }
        default :
            return state
    }
}
export default filterReducer;