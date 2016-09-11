import {combineReducers} from 'redux';
// import Storage from './storage';

// REVIEW: Помню, что говорила про разделение редьюсеров, но поняла, что оно тут не нужно.
// userReducer выглядит хорошо, предлагаю только вынести значение state по умолчанию в отдельную переменную
// initialState
// REVIEW: Используй одинарные кавычки, тут двойные не нужны
// REVIEW: в названии редьюсера не используй слово reducer, это излишне
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
    // REVIEW: Исправь ошибку и приведи к единообразию в именовании
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
// REVIEW: Долой мусор из кода!
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
  // REVIEW: Если назовёшь редьюсер user, можешь тут написать красиво на ES6:)
  user: userReducer,
  // REVIEW: Долой мусор из кода!
  // tweets: tweetsReducer,
});
