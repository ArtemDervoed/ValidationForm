/* eslint-disable no-unused-vars */
const initialState = {
  vacancy: '',
  fullName: '',
  phone: '',
  mail: '',
  education: '',
  experience: '',
  date: '',
};

export const userData = (
  state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'CHANGE_VACANCY': {
      newState = {...state, vacancy: action.payload};
    } break;
    case 'CHANGE_FULL_NAME': {
      newState = {...state, fullName: action.payload};
    } break;
    case 'CHANGE_PHONE': {
      newState = {...state, phone: action.payload};
    } break;
    case 'CHANGE_MAIL': {
      newState = {...state, mail: action.payload};
    } break;
    case 'CHANGE_EDUCATION': {
      newState = {...state, education: action.payload};
    } break;
    case 'CHANGE_EXPEREINCE': {
      newState = {...state, experience: action.payload};
    } break;
    case 'CHANGE_DATE': {
      newState = {...state, date: action.payload};
    } break;
    default: return Object.assign({}, state, {});
  }
  return newState;
};
