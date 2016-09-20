/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';

const initialState = {
  vacansy: '',
  fullName: '',
  phone: '',
  mail: '',
  education: '',
  experience: '',
  date: '',
};

const main = (
  state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VACANCY': {
      state = {...state, vacansy: action.payload};
    } break;
    case 'CHANGE_FULL_NAME': {
      state = {...state, fullName: action.payload};
    } break;
    case 'CHANGE_PHONE': {
      state = {...state, phone: action.payload};
    } break;
    case 'CHANGE_MAIL': {
      state = {...state, mail: action.payload};
    } break;
    case 'CHANGE_EDUCATION': {
      state = {...state, education: action.payload};
    } break;
    case 'CHANGE_EXPEREINCE': {
      state = {...state, experience: action.payload};
    } break;
    case 'CHANGE_DATE': {
      state = {...state, date: action.payload};
    } break;
    default: return state;
  }
  return state;
};
export const reducers = combineReducers({
  main,
});
