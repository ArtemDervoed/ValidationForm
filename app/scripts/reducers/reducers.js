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

// REVIEW: предлагаю переименовать во что-то более соответствующее действительности
//  По сути - это данные о нанимаемом
// Ты просил ресурс по именованию - почитай тут https://learn.javascript.ru/variable-names
// REVIEW: а где тесты редьюсеров?
const main = (
  state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'CHANGE_VACANCY': {
      newState = Object.assign({}, state, {vacansy: action.payload});
    } break;
    case 'CHANGE_FULL_NAME': {
      newState = Object.assign({}, state, {fullName: action.payload});
    } break;
    case 'CHANGE_PHONE': {
      newState = Object.assign({}, state, {phone: action.payload});
    } break;
    case 'CHANGE_MAIL': {
      newState = Object.assign({}, state, {mail: action.payload});
    } break;
    case 'CHANGE_EDUCATION': {
      newState = Object.assign({}, state, {education: action.payload});
    } break;
    case 'CHANGE_EXPEREINCE': {
      newState = Object.assign({}, state, {experience: action.payload});
    } break;
    case 'CHANGE_DATE': {
      newState = Object.assign({}, state, {date: action.payload});
    } break;
    default: return Object.assign({}, state, {});
  }
  return newState;
};
export const reducers = combineReducers({
  main,
});
