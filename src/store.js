import createStore from 'redux-zero';

const initialState = {
    name : null,
    title : null, 
    code : null,
    type : null,
    success : false, 
}

const store = createStore(initialState);
export default store;