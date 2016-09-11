// REVIEW: Используй одинарные кавычки, тут двойные не нужны
// REVIEW: Типы экшнов у тебя используются в нескольких файлах,
// предлагаю вынести их в отдельный файл в виде переменных, содержащих строки,
// а в этих файлах использовать переменные. Это позволит в будущем легко вносить
// изменения в одном месте вместо нескольких
export const changeFullName = (fullName) => {
  return {
    type: "CHANGE_FULL_NAME",
    payload: fullName,
  };
};
export const changeVacancy = (vacancy) => {
  return {
   type: "CHANGE_VACANCY",
    payload: vacancy,
  };
};
export const changeCash = (cash) => {
  return {
    type: "CHANGE_CASH",
    payload: cash,
  };
};
export const changePhone = (phone) => {
  return {
    type: "CHANGE_PHONE",
    payload: phone,
  };
};
export const changeMail = (mail) => {
  return {
    type: "CHANGE_MAIL",
    payload: mail,
  };
};
export const changeNationality = (nationality) => {
  return {
    type: "CHANGE_NATIONALITY",
    payload: nationality,
  };
};
export const changeGender = (gender) => {
  return {
    type: "CHANGE_GENDER",
    payload: gender,
  };
};
export const changeAge = (age) => {
  return {
    type: "CHANGE_AGE",
    payload: age,
  };
};
export const changeMarried = (married) => {
  return {
    type: "CHANGE_MARRIED",
    payload: married,
  };
};
export const changeEducation = (education) => {
  return {
    type: "CHANGE_EDUCATION",
    payload: education,
  };
};
export const changeExperience = (experience) => {
  return {
    type: "CHANGE_EXPEREINCE",
    payload: experience,
  };
};
export const changeDate = (date) => {
  return {
    type: "CHANGE_DATE",
    payload: date,
  };
};
export const changeValid = (valid) => {
  return {
    type: "CHANGE_VALID",
    payload: valid,
  };
};
