/* eslint-disable no-unused-vars */
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
export const changeCash = cash => {
  return {
    type: actionstype.CHANGE_CASH,
    payload: cash,
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
export const changeNationality = nationality => {
  return {
    type: actionstype.CHANGE_NATIONALITY,
    payload: nationality,
  };
};
export const changeGender = gender => {
  return {
    type: actionstype.CHANGE_GENDER,
    payload: gender,
  };
};
export const changeAge = age => {
  return {
    type: actionstype.CHANGE_AGE,
    payload: age,
  };
};
export const changeMarried = married => {
  return {
    type: actionstype.CHANGE_MARRIED,
    payload: married,
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
export const changeValid = valid => {
  return {
    type: actionstype.CHANGE_VALID,
    payload: valid,
  };
};
