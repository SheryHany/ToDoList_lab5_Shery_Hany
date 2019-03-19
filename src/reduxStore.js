//redux for make store
import { createStore } from 'redux';
//reducer
import AddTaskReducer  from '../src/reducers/AddTaskReducer';



const initialState = {
    data: [],

}

const store = createStore(AddTaskReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

