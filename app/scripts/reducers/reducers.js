/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';

const initialState = {
  vacansy: '',
  cash: '',
  fullName: '',
  phone: '',
  mail: '',
  nationality: '',
  gender: '',
  age: '',
  married: '',
  education: '',
  experience: '',
  date: '',
  valid: '',
};

const main = (
  state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VACANCY': {
      state = {...state, vacansy: action.payload};
    } break;
    case 'CHANGE_CASH': {
      state = {...state, cash: action.payload};
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
    case 'CHANGE_NATIONALITY': {
      state = {...state, nationality: action.payload};
    } break;
    case 'CHANGE_GENDER': {
      state = {...state, gender: action.payload};
    } break;
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload};
    } break;
    case 'CHANGE_MARRIED': {
      state = {...state, married: action.payload};
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
    case 'CHANGE_VALID': {
      state = {...state, valid: action.payload};
    } break;
    default: return state;
  }
  return state;
};
export const reducers = combineReducers({
  main,
});
