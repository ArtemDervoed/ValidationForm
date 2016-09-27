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
  it('Change users education', () => {
    expect(userData(testState, actions.changeEducation('newEducation'))).to.be.eql({
      vacancy: '',
      fullName: '',
      phone: '',
      mail: '',
      education: 'newEducation',
      experience: '',
      date: '',
    });
  });
});
