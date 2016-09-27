import {userData} from '../reducers';
import * as actions from '../../actions/actions';

const testState = {
  vacancy: '',
  fullName: '',
  phone: '',
  mail: '',
  education: '',
  experience: '',
  date: '',
};

describe('reducers', () => {
  it('Change users vacancy', () => {
    expect(userData(testState, actions.changeVacancy('newVacancy'))).to.be.eql({
      vacancy: 'newVacancy',
      fullName: '',
      phone: '',
      mail: '',
      education: '',
      experience: '',
      date: '',
    });
  });
});
