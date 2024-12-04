import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer';

// Create the store with the reducer
const store = createStore(uiReducer);

export default store;
