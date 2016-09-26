import * as actions from '../actions';
// REVIEW: ты же можешь тут импортировать типы действий

describe('actions', () => {
  it('Change users full name', () => {
    expect(actions.changeFullName('New User')).to.be.eql({
      type: 'CHANGE_FULL_NAME',
      payload: 'New User',
    });
  });
  it('Change users vacancy', () => {
    expect(actions.changeVacancy('New vacancy')).to.be.eql({
      type: 'CHANGE_VACANCY',
      payload: 'New vacancy',
    });
  });
  it('Change users phone', () => {
    expect(actions.changePhone('88005553535')).to.be.eql({
      type: 'CHANGE_PHONE',
      payload: '88005553535',
    });
  });
  it('Change users mail', () => {
    expect(actions.changeMail('unnamed@mail.ru')).to.be.eql({
      type: 'CHANGE_MAIL',
      payload: 'unnamed@mail.ru',
    });
  });
  it('Change users education', () => {
    expect(actions.changeEducation('Полное высшее')).to.be.eql({
      type: 'CHANGE_EDUCATION',
      payload: 'Полное высшее',
    });
  });
  it('Change users work experience', () => {
    expect(actions.changeExperience('1 год')).to.be.eql({
      type: 'CHANGE_EXPEREINCE',
      payload: '1 год',
    });
  });
  it('Change users born date', () => {
    expect(actions.changeDate('22.06.1995')).to.be.eql({
      type: 'CHANGE_DATE',
      payload: '22.06.1995',
    });
  });
});
