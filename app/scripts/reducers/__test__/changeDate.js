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
  it('Change users date', () => {
    expect(userData(testState, actions.changeDate('newDate'))).to.be.eql({
      vacancy: '',
      fullName: '',
      phone: '',
      mail: '',
      education: '',
      experience: '',
      date: 'newDate',
    });
  });
});
