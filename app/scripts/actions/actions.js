// косяк с модулем

export default class Actions {
  changeFullName(fullName) {
    return {
      type: "CHANGE_FULL_NAME",
      payload: fullName,
    };
  };
  changeVacancy(vacancy) {
    return {
      type: "CHANGE_VACANCY",
      payload: vacancy,
    };
  };
  cangeCash(cash) {
    return {
      type: "CHANGE_CASH",
      payload: cash,
    };
  };
  changePhone(phone) {
    return {
      type: "CHANGE_PHONE",
      payload: phone,
    };
  };
  changeMail(mail) {
    return {
      type: "CHANGE_MAIL",
      payload: mail,
    };
  };
  changeNationality(nationality) {
    return {
      type: "CHANGE_NATIONALITY",
      payload: nationality,
    };
  };
  changeSex(sex) {
    return {
      type: "CHANGE_SEX",
      payload: sex,
    };
  };
  changeAge(age) {
    return {
      type: "CHANGE_AGE",
      payload: age,
    };
  };
  changeMarried(married) {
    return {
      type: "CHANGE_MARRIED",
      payload: married,
    };
  };
  changeEducation(education) {
    return {
      type: "CHANGE_EDUCATION",
      payload: education,
    };
  };
  changeExperience(experience) {
    return {
      type: "CHANGE_EXPEREINCE",
      payload: experience,
    };
  };
  changeDate(date) {
    return {
      type: "CHANGE_DATE",
      payload: date,
    };
  };
  changeValid(valid) {
    return {
      type: "CHANGE_VALID",
      payload: valid,
    };
  };
}
