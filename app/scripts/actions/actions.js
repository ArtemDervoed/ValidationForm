/* eslint-disable no-unused-vars */
// REVIEW: круто, только давай назовём файл корректнее.
// Сейчас название переводится как "тип действий"
// И правильнее было бы использовать camelcase
import * as actionstype from './actionstype';

export const changeFullName = fullName => {
  return {
    type: actionstype.CHANGE_FULL_NAME,
    payload: fullName,
  };
};
export const changeVacancy = vacancy => {
  return {
    type: actionstype.CHANGE_VACANCY,
    payload: vacancy,
  };
};
export const changePhone = phone => {
  return {
    type: actionstype.CHANGE_PHONE,
    payload: phone,
  };
};
export const changeMail = mail => {
  return {
    type: actionstype.CHANGE_MAIL,
    payload: mail,
  };
};
export const changeEducation = education => {
  return {
    type: actionstype.CHANGE_EDUCATION,
    payload: education,
  };
};
export const changeExperience = experience => {
  return {
    type: actionstype.CHANGE_EXPEREINCE,
    payload: experience,
  };
};
export const changeDate = date => {
  return {
    type: actionstype.CHANGE_DATE,
    payload: date,
  };
};
