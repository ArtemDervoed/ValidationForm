/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';

export const changeFullName = fullName => {
  return {
    type: actionTypes.CHANGE_FULL_NAME,
    payload: fullName,
  };
};
export const changeVacancy = vacancy => {
  return {
    type: actionTypes.CHANGE_VACANCY,
    payload: vacancy,
  };
};
export const changePhone = phone => {
  return {
    type: actionTypes.CHANGE_PHONE,
    payload: phone,
  };
};
export const changeMail = mail => {
  return {
    type: actionTypes.CHANGE_MAIL,
    payload: mail,
  };
};
export const changeEducation = education => {
  return {
    type: actionTypes.CHANGE_EDUCATION,
    payload: education,
  };
};
export const changeExperience = experience => {
  return {
    type: actionTypes.CHANGE_EXPEREINCE,
    payload: experience,
  };
};
export const changeDate = date => {
  return {
    type: actionTypes.CHANGE_DATE,
    payload: date,
  };
};
