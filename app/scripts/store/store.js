import {createStore} from 'redux';
import {userData} from './../reducers/reducers';

export const store = createStore(userData);
