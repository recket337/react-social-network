import { combineReducers, createStore } from 'redux';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './users-reducer';

let reducersData = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export let store = createStore(reducersData);

window.store = store;
