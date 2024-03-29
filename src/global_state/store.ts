// redux
import {combineReducers, legacy_createStore as createStore} from 'redux';
import AppReducer from './app.reducer';
import ComponentReducer from './component.reducer';

const reducers = {
  AppReducer,
};

export default createStore(combineReducers(reducers));
