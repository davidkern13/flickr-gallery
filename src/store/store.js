import { createStore } from 'redux';

/*
 * Create store in external file
 * import in App.js
 */
import rootReducers from './reducers';
const store = createStore(rootReducers);

export default store;
