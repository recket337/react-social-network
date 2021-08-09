import { combineReducers, createStore } from 'redux';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './users-reducer';

let reducersData = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
});

export let store = createStore(reducersData);
