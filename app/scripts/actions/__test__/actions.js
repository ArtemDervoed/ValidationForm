import * as actions from '../actions';
import * as actionsType from '../actionstype';

describe('actions work', () => {
  it('changeFullName', () => {
    expect(actions.changeFullName('New User')).to.be.eql({
      type: 'CHANGE_FULL_NAME',
      payload:'New User',
    });
  });
  it('changeVacancy', () => {
    expect(actions.changeVacancy('New vacancy')).to.be.eql({
      type: 'CHANGE_VACANCY',
      payload:'New vacancy',
    });
  });
  it('changePhone', () => {
    expect(actions.changePhone('88005553535')).to.be.eql({
      type: 'CHANGE_PHONE',
      payload:'88005553535',
    });
  });
  it('changeMail', () => {
    expect(actions.changeMail('unnamed@mail.ru')).to.be.eql({
      type: 'CHANGE_MAIL',
      payload:'unnamed@mail.ru',
    });
  });
  it('changeEducation', () => {
    expect(actions.changeEducation('Полное высшее')).to.be.eql({
      type: 'CHANGE_EDUCATION',
      payload:'Полное высшее',
    });
  });
  it('changeExperience', () => {
    expect(actions.changeExperience('1 год')).to.be.eql({
      type: 'CHANGE_EXPEREINCE',
      payload:'1 год',
    });
  });
  it('changeDate', () => {
    expect(actions.changeDate('22.06.1995')).to.be.eql({
      type: 'CHANGE_DATE',
      payload:'22.06.1995',
    });
  });
});
