import { ADD_TASK, MARK_TASK, DEL_TASK, SET_USER, ADD_COMMENT } from './actions';

const initialState = {
    todoList: [],
    user: "",
}

//Reducer is a fn, with 2 parameters, state & action
//Job of it, is to return the new state, based on the action.
//After the action gets matched, we copy the earlier state
//by doing ...state and then we add the new data using payload.
//We need to pass min. info in the payload, and inside the reducer
//we should add the business logic.

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const { done, data, id } = action.payload;
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        data: data,
                        id: id,
                        done: done,
                        comments: []
                    }
                ]
            }

        case DEL_TASK:
            const list = state.todoList.filter((element) => element.id != action.id);
            return {
                ...state,
                todoList: list
            }

        case SET_USER:
            const userInfo = action.payload;
            return {
                ...state, userInfo
            }

        case MARK_TASK:
            const newList = state.todoList.map(item => {
                if (item.id == action.id) {
                    if (item.done){
                        return {...item, done: false}
                    }else{
                        return { ...item, done: true };
                    }
                }
                return item;
            });
            return {
                ...state,
                todoList: newList
            }

        case ADD_COMMENT:
            const { comment, itemId } = action.payload;
            const updatedList = state.todoList.map((item => {                
                if (item.id == itemId) {
                    item.comments.push({id:Date.now(), "value":comment})
                }
                return item;
            }));
            return {
                ...state,
                todoList: updatedList
            }

        default:
            return state;
    }
}


export default taskReducer;