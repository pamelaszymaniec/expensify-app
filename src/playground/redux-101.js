import {createStore} from 'redux';

const store = createStore((state = { count: 0 })=> {
    return state.count + 1;

});

console.log(store.getState());