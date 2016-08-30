import {combineReducers} from 'redux';
// import Storage from './storage';

const userReducer = (
  state = {
    vacansy: "",
    cash: "",
    fullName: "",
    phone: "",
    mail: "",
    nationality: "",
    gender: "",
    age: "",
    married: "",
    education: "",
    experience: "",
    date: "",
    valid: ""
    }, action) => {
  switch (action.type) {
    case "CHANGE_VACANCY": {
      state = {...state, vacansy: action.payload};
    } break;
    case "CHANGE_CASH": {
      state = {...state, cash: action.payload};
    } break;
    case "CHANGE_FULL_NAME": {
      state = {...state, fullName: action.payload};
    } break;
    case "CHANGE_PHONE": {
      state = {...state, phone: action.payload};
    } break;
    case "CHANGE_MAIL": {
      state = {...state, mail: action.payload};
    } break;
    case "CHANGE_NATIONALITY": {
      state = {...state, nationality: action.payload};
    } break;
    case "CHANGE_GENDER": {
      state = {...state, gender: action.payload};
    } break;
    case "CHANGE_AGE": {
      state = {...state, age: action.payload};
    } break;
    case "CHANGE_MARRIED": {
      state = {...state, married: action.payload};
    } break;
    case "CHANGE_EDUCATION": {
      state = {...state, education: action.payload};
    } break;
    case "CHANGE_EXPEREINCE": {
      state = {...state, experience: action.payload};
    } break;
    case "CHANGE_DATE": {
      state = {...state, date: action.payload};
    } break;
    case "CHANGE_VALID": {
      state = {...state, valid: action.payload};
    } break;
  }
  return state;
};
/*
const tweetsReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TWEET": {
      state.push(action.payload);
    } break;
    case "REMOVE_TWEET": {
      state.splice(action.payload);
    } break;
  }
  return state;
};
*/
export const reducers = combineReducers({
  user: userReducer,
  // tweets: tweetsReducer,
});
