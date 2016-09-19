/* eslint-disable no-unused-vars */
import * as actionsName from './actionsName';

export const changeFullName = fullName => {
  return {
    type: actionsName.CHANGE_FULL_NAME,
    payload: fullName,
  };
};
export const changeVacancy = vacancy => {
  return {
    type: actionsName.CHANGE_VACANCY,
    payload: vacancy,
  };
};
export const changePhone = phone => {
  return {
    type: actionsName.CHANGE_PHONE,
    payload: phone,
  };
};
export const changeMail = mail => {
  return {
    type: actionsName.CHANGE_MAIL,
    payload: mail,
  };
};
export const changeEducation = education => {
  return {
    type: actionsName.CHANGE_EDUCATION,
    payload: education,
  };
};
export const changeExperience = experience => {
  return {
    type: actionsName.CHANGE_EXPEREINCE,
    payload: experience,
  };
};
export const changeDate = date => {
  return {
    type: actionsName.CHANGE_DATE,
    payload: date,
  };
};
