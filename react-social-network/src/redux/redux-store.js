import { combineReducers, createStore } from 'redux';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';

let reducersData = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
});

export let store = createStore(reducersData);
