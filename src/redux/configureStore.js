import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

let store;

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );
}
else {
  store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
  );
}

export default store;